const worker = document.querySelector('#obrero');
const toggle = document.querySelector('#animacion');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let playing = false;

function setPlaying(enabled) {
  playing = enabled;
  worker.src = enabled ? 'obrero-imprenta.gif' : 'obrero-imprenta.webp';
  toggle.textContent = enabled ? 'Pausar animación' : 'Reproducir animación';
}

toggle.addEventListener('click', () => setPlaying(!playing));
reducedMotion.addEventListener('change', (event) => setPlaying(!event.matches));
setPlaying(!reducedMotion.matches);
toggle.hidden = false;
