const r = require("raylib");
const utils = require("./detectorUtils");

const WIDTH = 1200;
const HEIGHT = 800;
const FPS = 60;

let d1PosX = 0;
let d1Speed = 3;

let d2PosX = WIDTH / 2;
let d2Speed = 4;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Particle Detector");
    r.SetTargetFPS(FPS);
}

function update() {
    d1PosX += d1Speed;
    d2PosX += d2Speed;
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
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);

    // Common properties
    const detectorAndParticlePosY = 0;
    const detectorAndParticleHeight = HEIGHT;
    const detectorWidth = 70;

    // Particle-related properties
    const p1X = WIDTH / 3;
    const p1Width = 200;

    const p2X = WIDTH * (2 / 3);
    const p2Width = 20;

    const pColor = r.SKYBLUE;

    // Detector-related properties
    const d1LeftBoundarie = 0;
    const d1RightBoundarie = (WIDTH / 2) - detectorWidth;
    let d1Color = utils.isParticleDetected(d1PosX, detectorWidth, p1X, p1Width, p2X, p2Width) ? r.RED : r.WHITE;

    const d2LeftBoundarie = WIDTH / 2;
    const d2RightBoundarie = WIDTH - detectorWidth;
    let d2Color = utils.isParticleDetected(d2PosX, detectorWidth, p1X, p1Width, p2X, p2Width) ? r.RED : r.WHITE;

    // Particle Fields
    drawParticle(p1X, detectorAndParticlePosY, p1Width, detectorAndParticleHeight, pColor);

    drawParticle(p2X, detectorAndParticlePosY, p2Width, detectorAndParticleHeight, pColor);

    // Particle Detectors
    drawDetector(d1PosX, detectorAndParticlePosY, detectorWidth, detectorAndParticleHeight, d1Color);
    d1Speed = utils.handleDetectorEdgeBounce(d1PosX, d1LeftBoundarie, d1RightBoundarie, d1Speed);

    drawDetector(d2PosX, detectorAndParticlePosY, detectorWidth, detectorAndParticleHeight, d2Color);
    d2Speed = utils.handleDetectorEdgeBounce(d2PosX, d2LeftBoundarie, d2RightBoundarie, d2Speed);

    r.EndDrawing()
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