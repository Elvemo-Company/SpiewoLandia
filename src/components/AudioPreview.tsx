import React, { useEffect, useState } from 'react';
import { Play, Pause, Loader2 } from 'lucide-react';
import { findItunesPreviewUrl, globalAudioController } from '../utils/audioUtils';

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

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
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
  }, [title, artist]);

  const togglePlay = () => {
    if (!previewUrl) return;
    globalAudioController.toggle(id, previewUrl).catch(() => {});
  };

  useEffect(() => {
    const unsub = globalAudioController.subscribe((state) => {
      setIsPlaying(state.currentId === id && state.isPlaying);
    });
    return () => unsub();
  }, [id]);

  if (loading) {
    return (
      <span className="inline-flex items-center text-xs text-chocolate/70">
        <Loader2 className="h-4 w-4 mr-1 animate-spin" /> Szukam podglądu…
      </span>
    );
  }

  if (!previewUrl) {
    return <span className="text-xs text-chocolate/60">Brak podglądu</span>;
  }

  return (
    <button
      onClick={togglePlay}
      className={`${className ?? ''} w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
        isPlaying ? 'bg-sunset text-white' : 'bg-golden text-white hover:bg-sunset'
      }`}
      aria-label={isPlaying ? 'Pauza' : 'Odtwórz podgląd'}
    >
      {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 ml-0.5" />}
    </button>
  );
};

export default AudioPreview;


