import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pause, Loader2, Youtube as YoutubeIcon, Headphones } from 'lucide-react';
import { findItunesPreviewUrl, globalAudioController, findYoutubeUrl, globalYoutubeController } from '../utils/audioUtils';

type AudioPreviewProps = {
  title: string;
  artist?: string;
  className?: string;
};

const AudioPreview: React.FC<AudioPreviewProps> = ({ title, artist, className }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [id] = useState<string>(() => `${(title || '').toLowerCase()}|${(artist || '').toLowerCase()}`);
  const youtubeUrl = useMemo(() => findYoutubeUrl(title, artist), [title, artist]);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const youtubeVideoId = useMemo(() => {
    if (!youtubeUrl) return null;
    const m = youtubeUrl.match(/[?&]v=([\w-]{11})|youtu\.be\/([\w-]{11})/);
    return m ? (m[1] || m[2]) : null;
  }, [youtubeUrl]);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    // Jeśli mamy YT, nie szukamy iTunes
    if (youtubeUrl) {
      setPreviewUrl(null);
      setLoading(false);
      return () => { isMounted = false; };
    }
    findItunesPreviewUrl(title, artist)
      .then((url) => {
        if (!isMounted) return;
        setPreviewUrl(url);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [title, artist, youtubeUrl]);

  const togglePlay = () => {
    if (youtubeUrl) {
      const ytIdMatch = youtubeUrl.match(/[?&]v=([\w-]{11})|youtu\.be\/([\w-]{11})/);
      const ytId = ytIdMatch ? (ytIdMatch[1] || ytIdMatch[2]) : null;
      if (!ytId) return;
      if (!iframeRef.current) return;
      const startPlay = () => {
        globalYoutubeController.toggle(id);
        // play
        iframeRef.current?.contentWindow?.postMessage(JSON.stringify({
          event: 'command',
          func: 'playVideo',
          args: []
        }), '*');
      };
      const stopPlay = () => {
        iframeRef.current?.contentWindow?.postMessage(JSON.stringify({
          event: 'command',
          func: 'pauseVideo',
          args: []
        }), '*');
      };
      if (isPlaying) {
        stopPlay();
      } else {
        startPlay();
      }
      return;
    }
    if (!previewUrl) return;
    globalAudioController.toggle(id, previewUrl).catch(() => {});
  };

  useEffect(() => {
    if (youtubeUrl) {
      const unsub = globalYoutubeController.subscribe((state) => {
        setIsPlaying(state.currentId === id && state.isPlaying);
        if (iframeRef.current && state.currentId !== id) {
          iframeRef.current.contentWindow?.postMessage(JSON.stringify({
            event: 'command',
            func: 'pauseVideo',
            args: []
          }), '*');
        }
      });
      return () => unsub();
    }
    const unsub = globalAudioController.subscribe((state) => {
      setIsPlaying(state.currentId === id && state.isPlaying);
    });
    return () => unsub();
  }, [id, youtubeUrl]);

  if (loading) {
    return (
      <span className="inline-flex items-center text-xs text-chocolate/70">
        <Loader2 className="h-4 w-4 mr-1 animate-spin" /> Szukam podglądu…
      </span>
    );
  }

  if (!youtubeUrl && !previewUrl) {
    return <span className="text-xs text-chocolate/60">Brak podglądu</span>;
  }

  return (
    <>
      <button
        onClick={togglePlay}
        className={`${className ?? ''} w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isPlaying ? 'bg-sunset text-white' : 'bg-golden text-white hover:bg-sunset'
        }`}
        aria-label={isPlaying ? 'Pauza' : 'Odtwórz podgląd'}
      >
        {youtubeUrl ? (
          isPlaying ? <Pause className="h-3 w-3" /> : <YoutubeIcon className="h-3 w-3" />
        ) : (
          isPlaying ? <Pause className="h-3 w-3" /> : <Headphones className="h-3 w-3" />
        )}
      </button>
      {youtubeVideoId && (
        <iframe
          ref={iframeRef}
          title={`youtube-${id}`}
          width={1}
          height={1}
          src={`https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&playsinline=1&rel=0&modestbranding=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
        />
      )}
    </>
  );
};

export default AudioPreview;


