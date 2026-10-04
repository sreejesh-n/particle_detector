const r = require("raylib");

const d = require("./detectorUtils");
const p = require("./particleUtils");
const range = require("./ranges");

function running() {
  return !r.WindowShouldClose();
}

function setup(WIDTH, HEIGHT, FPS, title) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(FPS);

  const world = {};

  world.hD1 = d.createDetector(70, 0, WIDTH / 2, 2, "Horizontal", HEIGHT);
  world.hD2 = d.createDetector(70, WIDTH / 2, WIDTH, 3, "Horizontal", HEIGHT);
  world.vD1 = d.createDetector(70, 0, HEIGHT / 2, 2, "Vertical", WIDTH);
  world.vD2 = d.createDetector(70, HEIGHT / 2, HEIGHT, 3, "Vertical", WIDTH);

  world.hP1 = p.createParticle(400, 200, "Horizontal", HEIGHT);
  world.hP2 = p.createParticle(800, 20, "Horizontal", HEIGHT);
  world.vP1 = p.createParticle(340, 30, "Verticle", WIDTH);
  world.vP2 = p.createParticle(480, 150, "Verticle", WIDTH);

  return world;
}

function update(world) {
  d.updateDetector(world.hD1, world.hP1, world.hP2);
  d.updateDetector(world.hD2, world.hP1, world.hP2);
  d.updateDetector(world.vD1, world.vP1, world.vP2);
  d.updateDetector(world.vD2, world.vP1, world.vP2);
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  range.drawParticle(world.hP1);
  range.drawParticle(world.hP2);
  range.drawParticle(world.vP1);
  range.drawParticle(world.vP2);

  range.drawDetector(world.hD1);
  range.drawDetector(world.hD2);
  range.drawDetector(world.vD1);
  range.drawDetector(world.vD2);

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};
