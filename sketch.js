const r = require("raylib");
const utils = require("./detectorUtils");

const WIDTH = 1200;
const HEIGHT = 1000;
const FPS = 60;

const detectorSize = 70;

let hDetector1X = 0;
let hD1Velocity = 3;

let hDetector2X = WIDTH / 2;
let hD2Velocity = 4;

let vDetector1Y = 0;
let vD1Velocity = 3;

let vDetector2Y = HEIGHT / 2;
let vD2Velocity = 4;

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "Particle Detector");
  r.SetTargetFPS(FPS);
  r.SetTraceLogLevel(r.LOG_NONE);
}

function update() {
  const hD1LeftBoundarie = detectorSize;
  const hD1RightBoundarie = WIDTH / 2 - detectorSize * 2;

  const hD2LeftBoundarie = WIDTH / 2 + detectorSize;
  const hD2RightBoundarie = WIDTH - detectorSize - hD2LeftBoundarie;

  const vD1TopBoundarie = detectorSize;
  const vD1BottomBoundarie = HEIGHT / 2 - detectorSize * 2;

  const vD2TopBoundarie = HEIGHT / 2 + detectorSize;
  const vD2BottomBoundarie = HEIGHT - detectorSize - vD2TopBoundarie;

  hD1Velocity = utils.calcVelocity(
    hDetector1X,
    detectorSize,
    hD1LeftBoundarie,
    hD1RightBoundarie,
    hD1Velocity,
  );

  hDetector1X += hD1Velocity;

  hD2Velocity = utils.calcVelocity(
    hDetector2X,
    detectorSize,
    hD2LeftBoundarie,
    hD2RightBoundarie,
    hD2Velocity,
  );

  hDetector2X += hD2Velocity;

  vD1Velocity = utils.calcVelocity(
    vDetector1Y,
    detectorSize,
    vD1TopBoundarie,
    vD1BottomBoundarie,
    vD1Velocity,
  );

  vDetector1Y += vD1Velocity;

  vD2Velocity = utils.calcVelocity(
    vDetector2Y,
    detectorSize,
    vD2TopBoundarie,
    vD2BottomBoundarie,
    vD2Velocity,
  );

  vDetector2Y += vD2Velocity;
}

function drawRange(x, y, width, height, color) {
  r.DrawRectangle(x, y, width, height, color);
}

function drawDetector(x, y, width, height, color) {
  drawRange(x, y, width, height, color);
}

function drawParticle(x, y, width, height, color) {
  drawRange(x, y, width, height, color);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  // Common properties
  const hDetectorAndParticlePosY = 0;
  const hDetectorAndParticleHeight = HEIGHT;

  const vDetectorAndParticlePosX = 0;
  const vDetectorAndParticleWidth = WIDTH;

  // Particle-related properties
  const hP1X = WIDTH / 3;
  const hP1Width = 200;

  const hP2X = WIDTH * (2 / 3);
  const hP2Width = 20;

  const vP1Y = HEIGHT / 3;
  const vP1Height = 30;

  const vP2Y = vP1Y + 140;
  const vP2Height = 150;

  const pColor = r.SKYBLUE;

  // Detector-related properties
  const hD1Color = utils.getDetectorColor(
    hDetector1X,
    detectorSize,
    hP1X,
    hP1Width,
    hP2X,
    hP2Width,
  );

  const hD2Color = utils.getDetectorColor(
    hDetector2X,
    detectorSize,
    hP1X,
    hP1Width,
    hP2X,
    hP2Width,
  );

  const vD1Color = utils.getDetectorColor(
    vDetector1Y,
    detectorSize,
    vP1Y,
    vP1Height,
    vP2Y,
    vP2Height,
  );

  const vD2Color = utils.getDetectorColor(
    vDetector2Y,
    detectorSize,
    vP1Y,
    vP1Height,
    vP2Y,
    vP2Height,
  );

  // Particle Fields
  drawParticle(
    hP1X,
    hDetectorAndParticlePosY,
    hP1Width,
    hDetectorAndParticleHeight,
    pColor,
  );

  drawParticle(
    hP2X,
    hDetectorAndParticlePosY,
    hP2Width,
    hDetectorAndParticleHeight,
    pColor,
  );

  drawParticle(
    vDetectorAndParticlePosX,
    vP1Y,
    vDetectorAndParticleWidth,
    vP1Height,
    pColor,
  );

  drawParticle(
    vDetectorAndParticlePosX,
    vP2Y,
    vDetectorAndParticleWidth,
    vP2Height,
    pColor,
  );

  // Particle Detectors
  drawDetector(
    hDetector1X,
    hDetectorAndParticlePosY,
    detectorSize,
    hDetectorAndParticleHeight,
    hD1Color,
  );

  drawDetector(
    hDetector2X,
    hDetectorAndParticlePosY,
    detectorSize,
    hDetectorAndParticleHeight,
    hD2Color,
  );

  drawDetector(
    vDetectorAndParticlePosX,
    vDetector1Y,
    vDetectorAndParticleWidth,
    detectorSize,
    vD1Color,
  );

  drawDetector(
    vDetectorAndParticlePosX,
    vDetector2Y,
    vDetectorAndParticleWidth,
    detectorSize,
    vD2Color,
  );

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
