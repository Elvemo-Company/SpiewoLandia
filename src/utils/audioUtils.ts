import notaAudio from '../assets/audio/nuta.mp3';
import youtubeMapJson from '../data/youtube-links.json';

// Funkcja do odtwarzania dźwięku na kliknięcie
export const playClickSound = () => {
  try {
    const audio = new Audio(notaAudio);
    audio.volume = 0.3; // Ustawiam niższą głośność dla click sounds
    audio.play().catch(error => {
      console.log('Nie można odtworzyć dźwięku kliknięcia:', error);
    });
  } catch (error) {
    console.log('Błąd przy odtwarzaniu audio kliknięcia:', error);
  }
};

// Funkcja do odtwarzania dźwięku dla buttonów CTA (call-to-action)
export const playCTASound = () => {
  try {
    const audio = new Audio(notaAudio);
    audio.volume = 0.5; // Wyższa głośność dla ważnych buttonów
    audio.play().catch(error => {
      console.log('Nie można odtworzyć dźwięku CTA:', error);
    });
  } catch (error) {
    console.log('Błąd przy odtwarzaniu audio CTA:', error);
  }
}; 

// =========================
// iTunes Search API preview
// =========================

const stripDiacritics = (value: string) =>
  (value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

const buildLocalStorageKey = (title: string, artist?: string) =>
  `itunesPreview:${stripDiacritics(title)}|${stripDiacritics(artist || '')}`;

type TitleOverride = {
  aliasTitle?: string; // użyj innego tytułu do wyszukiwania/cache
  preferredArtist?: string; // preferowany wykonawca (substring dopasowania)
  country?: string; // wymuś kraj wyszukiwania
  searchVariants?: Array<{ title?: string; artist?: string; country?: string }>; // dodatkowe warianty prób
};

// =========================
// YouTube map + controller
// =========================

type YoutubeMap = Record<string, string>;

const normalizeKey = (title: string, artist?: string) =>
  `${stripDiacritics(title)}|${stripDiacritics(artist || '')}`;

const buildYoutubeMap = (): YoutubeMap => {
  const map: YoutubeMap = {};
  try {
    const obj = (youtubeMapJson as unknown) as Record<string, string>;
    Object.entries(obj).forEach(([rawKey, url]) => {
      const parts = rawKey.split('|');
      const title = parts[0] || '';
      const artist = parts[1];
      map[normalizeKey(title, artist)] = url;
    });
  } catch {}
  return map;
};

const YOUTUBE_MAP: YoutubeMap = buildYoutubeMap();

export const findYoutubeUrl = (title: string, artist?: string): string | null => {
  const keyExact = normalizeKey(title, artist);
  if (YOUTUBE_MAP[keyExact]) return YOUTUBE_MAP[keyExact];
  const keyTitleOnly = normalizeKey(title);
  return YOUTUBE_MAP[keyTitleOnly] || null;
};

class GlobalYoutubeController {
  private currentId: string | null = null;
  private listeners: Set<(state: { currentId: string | null; isPlaying: boolean }) => void> = new Set();

  private emit() {
    const state = { currentId: this.currentId, isPlaying: this.currentId !== null };
    this.listeners.forEach((cb) => {
      try { cb(state); } catch {}
    });
  }

  subscribe(listener: (state: { currentId: string | null; isPlaying: boolean }) => void): () => void {
    this.listeners.add(listener);
    listener({ currentId: this.currentId, isPlaying: this.currentId !== null });
    return () => {
      this.listeners.delete(listener);
    };
  }

  start(id: string) {
    // zatrzymaj iTunes preview przy starcie YT
    try { this.stopAudioPreviews(); } catch {}
    this.currentId = id;
    this.emit();
  }

  toggle(id: string) {
    if (this.currentId === id) {
      this.currentId = null;
      this.emit();
      return;
    }
    this.start(id);
  }

  stop(id?: string) {
    if (!id || id === this.currentId) {
      this.currentId = null;
      this.emit();
    }
  }

  private stopAudioPreviews() {
    try { globalAudioController.stop(); } catch {}
  }
}

export const globalYoutubeController = new GlobalYoutubeController();

// DOPRECYZOWANIE dla spornych tytułów
const TITLE_OVERRIDES: Record<string, TitleOverride> = {
  // Unifikacja pod ten sam podgląd
  'powietrzem moim jestes': { aliasTitle: 'powietrzem moim jest', preferredArtist: 'TGD', country: 'PL' },
  'powietrzem moim jest': { preferredArtist: 'TGD', country: 'PL' },
  // Często występują w wydaniach uwielbieniowych
  'stoje dzis': { preferredArtist: 'TGD', country: 'PL' },
  'nie musisz mowic nic': { preferredArtist: 'TGD', country: 'PL' },
  'unosze wzrok': { preferredArtist: 'TGD', country: 'PL' },
  'schowaj mnie': { preferredArtist: 'TGD', country: 'PL' },
  'oblubieniec': { preferredArtist: 'TGD', country: 'PL' },
};

/**
 * Wyszukuje 30-sekundowy preview w iTunes Search API.
 * Zwraca URL lub null, a wynik cache'uje w localStorage.
 */
export async function findItunesPreviewUrl(title: string, artist?: string): Promise<string | null> {
  // localStorage może nie istnieć w środowiskach SSR; tu i tak używamy w przeglądarce
  try {
    // zastosuj override aliasów i preferencji
    const normTitle = stripDiacritics(title);
    const override = TITLE_OVERRIDES[normTitle];
    const effectiveTitle = override?.aliasTitle ? override.aliasTitle : title;
    const effectiveArtist = override?.preferredArtist ? override.preferredArtist : artist;
    const defaultCountry = override?.country || 'PL';

    // nie blokujemy się negatywnym cache — jeżeli jest 'null', ignorujemy i próbujemy ponownie
    const key = buildLocalStorageKey(effectiveTitle, effectiveArtist);
    const cached = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    if (cached && cached !== 'null') {
      return cached;
    }

    // przygotuj listę prób (warianty szukania)
    const attempts: Array<{ title: string; artist?: string; country: string }> = [];
    const pushAttempt = (t: string, a: string | undefined, c: string) => {
      attempts.push({ title: t, artist: a, country: c });
    };

    // podstawowe
    pushAttempt(effectiveTitle, effectiveArtist, defaultCountry);
    pushAttempt(effectiveTitle, undefined, defaultCountry);
    pushAttempt(title, artist, defaultCountry);
    pushAttempt(title, undefined, defaultCountry);
    // alternatywne kraje
    pushAttempt(effectiveTitle, effectiveArtist, 'US');
    pushAttempt(effectiveTitle, undefined, 'US');
    pushAttempt(title, artist, 'US');
    pushAttempt(title, undefined, 'US');
    // aliasy dodatkowe
    if (override?.searchVariants) {
      for (const v of override.searchVariants) {
        pushAttempt(v.title ?? effectiveTitle, v.artist ?? effectiveArtist, v.country ?? defaultCountry);
      }
    }
    // specyficzny przypadek "powietrzem moim jestes" ↔ "powietrzem moim jest"
    const aliasA = 'powietrzem moim jest';
    const aliasB = 'powietrzem moim jestes';
    if (stripDiacritics(effectiveTitle) === aliasB) pushAttempt(aliasA, effectiveArtist, defaultCountry);
    if (stripDiacritics(effectiveTitle) === aliasA) pushAttempt(aliasB, effectiveArtist, defaultCountry);

    // wykonaj próby sekwencyjnie do skutku
    for (const attempt of attempts) {
      const term = [attempt.title, attempt.artist].filter(Boolean).join(' ');
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=music&entity=song&limit=25&country=${encodeURIComponent(attempt.country)}`;
      try {
        const response = await fetch(url);
        if (!response.ok) continue;
        const data = await response.json();
        const results: any[] = data?.results || [];
        if (!results.length) continue;

        // filtrowanie
        let filtered = results;
        if (attempt.artist) {
          const normArtist = stripDiacritics(attempt.artist);
          filtered = results.filter((r) => stripDiacritics(r.artistName || '').includes(normArtist));
        }
        const normTitleAttempt = stripDiacritics(attempt.title);
        let hit = filtered.find((r) => stripDiacritics(r.trackName || '') === normTitleAttempt && r.previewUrl);
        if (!hit) hit = filtered.find((r) => r.previewUrl);
        if (!hit) hit = results.find((r) => r.previewUrl);
        const previewUrl: string | null = hit?.previewUrl || null;
        if (previewUrl) {
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, previewUrl);
          }
          return previewUrl;
        }
      } catch {}
    }

    // brak wyniku — nie zapisujemy 'null' do cache, żeby umożliwić późniejsze próby
    return null;
  } catch (error) {
    console.warn('Preview lookup failed:', error);
    // nie zapisujemy negatywnego cache
    return null;
  }
}

// =========================
// Globalny kontroler audio
// =========================

type AudioState = { currentId: string | null; isPlaying: boolean };
type AudioListener = (state: AudioState) => void;

class GlobalAudioController {
  private audio: HTMLAudioElement | null = null;
  private currentId: string | null = null;
  private listeners: Set<AudioListener> = new Set();

  private ensureAudio(): HTMLAudioElement {
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.volume = 0.8;
      this.audio.onended = () => {
        this.currentId = null;
        this.emit();
      };
    }
    return this.audio;
  }

  private emit() {
    const audio = this.audio;
    const state: AudioState = { currentId: this.currentId, isPlaying: !!audio && !audio.paused && !audio.ended };
    this.listeners.forEach((cb) => {
      try {
        cb(state);
      } catch {}
    });
  }

  subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    const audio = this.audio;
    listener({ currentId: this.currentId, isPlaying: !!audio && !audio.paused && !audio.ended });
    return () => {
      this.listeners.delete(listener);
    };
  }

  async play(id: string, url: string): Promise<void> {
    const audio = this.ensureAudio();
    if (this.currentId && this.currentId !== id) {
      audio.pause();
    }
    if (audio.src !== url) {
      audio.src = url;
    }
    audio.currentTime = 0;
    await audio.play();
    this.currentId = id;
    this.emit();
  }

  async toggle(id: string, url: string): Promise<void> {
    const audio = this.ensureAudio();
    const isCurrent = this.currentId === id;
    if (isCurrent && !audio.paused) {
      audio.pause();
      this.currentId = null;
      this.emit();
      return;
    }
    await this.play(id, url);
  }

  stop(id?: string) {
    const audio = this.audio;
    if (!audio) return;
    if (!id || id === this.currentId) {
      audio.pause();
      this.currentId = null;
      this.emit();
    }
  }
}

export const globalAudioController = new GlobalAudioController();