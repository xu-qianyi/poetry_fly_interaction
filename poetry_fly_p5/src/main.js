import './style.css';
import p5 from 'p5';
import GUI from 'lil-gui';
import { loadPoemCollection } from './core/poemStore.js';
import { createWordGardenSketch } from './sketches/wordGardenSketch.js';

document.querySelector('#app').innerHTML = `
  <main class="layout">
    <header class="topbar">
      <div>
        <h1>Poetry Fly p5 Lab</h1>
        <p>Prototype interaction modes quickly with p5.js</p>
      </div>
      <div class="controls">
        <label for="modeSelect">Mode</label>
        <select id="modeSelect">
          <option value="drift">drift</option>
          <option value="ripple">ripple (placeholder)</option>
          <option value="swarm">swarm (placeholder)</option>
        </select>
        <button id="resetButton" type="button">Reset</button>
      </div>
    </header>
    <section id="canvasHost" class="stage" aria-label="poem canvas"></section>
  </main>
`;

const state = {
  mode: 'drift',
  seed: Math.random() * 1000,
};

const poemCollection = await loadPoemCollection('/poems/default.json');

const sketch = createWordGardenSketch({
  getMode: () => state.mode,
  getSeed: () => state.seed,
  poemCollection,
});

new p5(sketch, document.getElementById('canvasHost'));

const modeSelect = document.getElementById('modeSelect');
const resetButton = document.getElementById('resetButton');

modeSelect.addEventListener('change', (event) => {
  state.mode = event.target.value;
});

resetButton.addEventListener('click', () => {
  state.seed = Math.random() * 1000;
});

const gui = new GUI({ title: 'Sketch tuning' });
gui.add(state, 'mode', ['drift', 'ripple', 'swarm']).name('Mode').onChange((value) => {
  modeSelect.value = value;
});
