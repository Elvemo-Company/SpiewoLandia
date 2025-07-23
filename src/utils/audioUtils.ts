import notaAudio from '../assets/audio/nuta.mp3';

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