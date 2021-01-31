import { Universe } from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

const renderLoop = async () => {
  pre.textContent = universe.render();
  universe.tick();

  // await (new Promise(resolve => setTimeout(resolve, 1000)));

  requestAnimationFrame(renderLoop);
}

requestAnimationFrame(renderLoop);
