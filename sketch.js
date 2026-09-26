const r = require("raylib");
const utils = require("./detectorUtils");

const WIDTH = 1200;
const HEIGHT = 800;
const FPS = 60;

let hDetector1X = 0;
let hD1Speed = 3;

let hDetector2X = WIDTH / 2;
let hD2Speed = 4;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Particle Detector");
    r.SetTargetFPS(FPS);
}

function update() {
    hDetector1X += hD1Speed;
    hDetector2X += hD2Speed;
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
    const hDetectorAndParticlePosY = 0;
    const hDetectorAndParticleHeight = HEIGHT;

    // Particle-related properties
    const hP1X = WIDTH / 3;
    const hP1Width = 200;

    const hP2X = WIDTH * (2 / 3);
    const hP2Width = 20;

    const pColor = r.SKYBLUE;

    // Detector-related properties
    const detectorWidth = 70;

    const hD1LeftBoundarie = 0;
    const hD1RightBoundarie = (WIDTH / 2) - detectorWidth;
    let hD1Color = utils.isParticleDetected(hDetector1X, detectorWidth, hP1X, hP1Width, hP2X, hP2Width) ? r.RED : r.WHITE;

    const hD2LeftBoundarie = WIDTH / 2;
    const hD2RightBoundarie = WIDTH - detectorWidth;
    let hD2Color = utils.isParticleDetected(hDetector2X, detectorWidth, hP1X, hP1Width, hP2X, hP2Width) ? r.RED : r.WHITE;

    // Particle Fields
    drawParticle(hP1X, hDetectorAndParticlePosY, hP1Width, hDetectorAndParticleHeight, pColor);

    drawParticle(hP2X, hDetectorAndParticlePosY, hP2Width, hDetectorAndParticleHeight, pColor);

    // Particle Detectors
    drawDetector(hDetector1X, hDetectorAndParticlePosY, detectorWidth, hDetectorAndParticleHeight, hD1Color);
    hD1Speed = utils.handleDetectorEdgeBounce(hDetector1X, hD1LeftBoundarie, hD1RightBoundarie, hD1Speed);

    drawDetector(hDetector2X, hDetectorAndParticlePosY, detectorWidth, hDetectorAndParticleHeight, hD2Color);
    hD2Speed = utils.handleDetectorEdgeBounce(hDetector2X, hD2LeftBoundarie, hD2RightBoundarie, hD2Speed);

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