# Instrukcja Dodawania Audio - nuta.mp3

## Jak dodać plik audio nuta.mp3

### 1. Przygotuj plik audio
- Nazwa pliku: `nuta.mp3`
- Format: MP3
- Rekomendowana długość: 0.5-2 sekundy
- Jakość: dobra dla web (128kbps wystarczy)

### 2. Umieść plik w odpowiednim folderze
```
src/
  assets/
    audio/
      nuta.mp3    ← Tutaj umieść swój plik
```

### 3. Gdzie są używane dźwięki
Plik `nuta.mp3` jest odtwarzany w następujących miejscach:

#### 🎵 Buttony Play Audio (VocalLessons.tsx, WeddingServices.tsx)
- Buttony play dla przykładowych lekcji
- Buttony play dla repertuaru ślubu
- Głośność: 50%

#### 🔘 Buttony CTA (Call-to-Action) - playCTASound()
- Hero section - główne buttony
- Buttony "Umów lekcję", "Sprawdź dostępność"
- Głośność: 50%

#### 🖱️ Buttony Click - playClickSound()
- Header - button "Zarezerwuj"
- Buttony nawigacyjne
- Głośność: 30%

### 4. Struktura implementacji

```typescript
// audioUtils.ts - główne funkcje
export const playClickSound = () => { ... }
export const playCTASound = () => { ... }

// VocalLessons.tsx & WeddingServices.tsx
const handlePlayAudio = (audioId: string) => {
  // Odtwarza nuta.mp3 przy kliknięciu play
}
```

### 5. Testowanie
Po dodaniu pliku `nuta.mp3`:
1. Uruchom projekt: `npm run dev`
2. Kliknij różne buttony na stronie
3. Sprawdź czy dźwięk się odtwarza

### 6. Rozwiązywanie problemów
- **Brak dźwięku**: Sprawdź czy plik jest w `src/assets/audio/nuta.mp3`
- **Błędy w konsoli**: Sprawdź czy przeglądarka pozwala na autoplay
- **Plik za duży**: Zmniejsz jakość MP3 lub skróć czas trwania

### 7. Gdzie można dodać więcej dźwięków
Możesz łatwo dodać dźwięki do innych buttonów importując:
```typescript
import { playClickSound, playCTASound } from '../utils/audioUtils';

<button onClick={playClickSound}>Przycisk</button>
``` 