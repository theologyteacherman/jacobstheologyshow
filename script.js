// Global script to play a random sound effect on any click.
// Uses uploaded MP3 files from the `audio` folder.

document.addEventListener('DOMContentLoaded', () => {
  const sounds = [
    'audio/sound1.mp3',
    'audio/sound2.mp3',
    'audio/sound3.mp3',
    'audio/sound4.mp3',
    'audio/sound5.mp3'
  ];

  function playRandomSound() {
    const src = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(src);
    audio.play().catch(() => {});
  }

  document.body.addEventListener('click', () => {
    playRandomSound();
  }, true);
});
