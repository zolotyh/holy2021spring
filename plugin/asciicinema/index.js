const plugin = () => ({
  id: 'asciicinema',
  init: () => {
    Reveal.on('slidechanged', (event) => {
      const player = event.currentSlide.querySelector('asciinema-player');
      if (!player.player) {
        setTimeout(() => {
          player.player.play();
        }, 0);
      }

      if (player && player.player) {
        player.currentTime = 0;
        player.player.play();
      }
    });
  },
});
window.Asciicinema = plugin;
