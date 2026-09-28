const r = require("raylib");

const sp = require("./setupProperties");
const utils = require("./detectorUtils");

const hd1 = require("./horizontalDetector01");
const hd2 = require("./horizontalDetector02");
const vd1 = require("./verticalDetector01");
const vd2 = require("./verticalDetector02");

const p = require("./particles");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(sp.WIDTH, sp.HEIGHT, "Particle Detector");
  r.SetTargetFPS(sp.FPS);
}

function update() {
  // Updating detector velocity
  hd1.velocity = utils.calcVelocity(
    hd1.detectorX,
    utils.dSize,
    hd1.leftBoundarie,
    hd1.rightBoundarie,
    hd1.velocity,
  );

  hd1.detectorX = utils.calcDetectorPosition(hd1.detectorX, hd1.velocity);

  hd2.velocity = utils.calcVelocity(
    hd2.detectorX,
    utils.dSize,
    hd2.leftBoundarie,
    hd2.rightBoundarie,
    hd2.velocity,
  );

  hd2.detectorX = utils.calcDetectorPosition(hd2.detectorX, hd2.velocity);

  vd1.velocity = utils.calcVelocity(
    vd1.detectorY,
    utils.dSize,
    vd1.topBoundarie,
    vd1.bottomBoundarie,
    vd1.velocity,
  );

  vd1.detectorY = utils.calcDetectorPosition(vd1.detectorY, vd1.velocity);

  vd2.velocity = utils.calcVelocity(
    vd2.detectorY,
    utils.dSize,
    vd2.topBoundarie,
    vd2.bottomBoundarie,
    vd2.velocity,
  );

  vd2.detectorY = utils.calcDetectorPosition(vd2.detectorY, vd2.velocity);

  // Determining the color of Detector
  hd1.color = utils.getDetectorColor(
    hd1.detectorX,
    utils.dSize,
    p.hP1X,
    p.hP1Width,
    p.hP2X,
    p.hP2Width,
  );

  hd2.color = utils.getDetectorColor(
    hd2.detectorX,
    utils.dSize,
    p.hP1X,
    p.hP1Width,
    p.hP2X,
    p.hP2Width,
  );

  vd1.color = utils.getDetectorColor(
    vd1.detectorY,
    utils.dSize,
    p.vP1Y,
    p.vP1Height,
    p.vP2Y,
    p.vP2Height,
  );

  vd2.color = utils.getDetectorColor(
    vd2.detectorY,
    utils.dSize,
    p.vP1Y,
    p.vP1Height,
    p.vP2Y,
    p.vP2Height,
  );
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
  const hDetectorAndParticleHeight = sp.HEIGHT;

  const vDetectorAndParticlePosX = 0;
  const vDetectorAndParticleWidth = sp.WIDTH;

  // Particle Fields
  drawParticle(
    p.hP1X,
    hDetectorAndParticlePosY,
    p.hP1Width,
    hDetectorAndParticleHeight,
    p.pColor,
  );

  drawParticle(
    p.hP2X,
    hDetectorAndParticlePosY,
    p.hP2Width,
    hDetectorAndParticleHeight,
    p.pColor,
  );

  drawParticle(
    vDetectorAndParticlePosX,
    p.vP1Y,
    vDetectorAndParticleWidth,
    p.vP1Height,
    p.pColor,
  );

  drawParticle(
    vDetectorAndParticlePosX,
    p.vP2Y,
    vDetectorAndParticleWidth,
    p.vP2Height,
    p.pColor,
  );

  // Particle Detectors
  drawDetector(
    hd1.detectorX,
    hDetectorAndParticlePosY,
    utils.dSize,
    hDetectorAndParticleHeight,
    hd1.color,
  );

  drawDetector(
    hd2.detectorX,
    hDetectorAndParticlePosY,
    utils.dSize,
    hDetectorAndParticleHeight,
    hd2.color,
  );

  drawDetector(
    vDetectorAndParticlePosX,
    vd1.detectorY,
    vDetectorAndParticleWidth,
    utils.dSize,
    vd1.color,
  );

  drawDetector(
    vDetectorAndParticlePosX,
    vd2.detectorY,
    vDetectorAndParticleWidth,
    utils.dSize,
    vd2.color,
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
