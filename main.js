const sketch = require("./sketch");

function loop(world) {
  while (sketch.running()) {
    sketch.update(world);
    sketch.draw(world);
  }
}

function main() {
  const world = sketch.setup(1200, 1000, 60, "Particle Detector");
  loop(world);
  sketch.teardown();
}

main();
