const r = require("raylib");
const geometry = require("./geometry");

const WIDTH = 1200;
const HEIGHT = 800;
const FPS = 60;

const detectorAndParticlePosY = 0;
const detectorAndParticleHeight = HEIGHT;
const detectorWidth = 70;

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

    // Detector-related variables
    const d1LeftBoundarie = 0;
    const d1RightBoundarie = (WIDTH / 2) - detectorWidth;
    // let d1Color = isOverlapping(p1X, p1Width, d1PosX, detectorWidth) ||
    //     isOverlapping(p2X, p2Width, d1PosX, detectorWidth) ? r.ColorAlpha(r.RED, 0.6) : r.WHITE;
    // let d1Color = decideColor();

    const d2LeftBoundarie = WIDTH / 2;
    const d2RightBoundarie = WIDTH - detectorWidth;
    let d2Color;

    // Particle-related variables
    const pColor = r.SKYBLUE;
    const p1X = WIDTH / 3;
    const p1Width = 150;

    const p2X = WIDTH * (2 / 3);
    const p2Width = 20;

    // Particle Fields
    drawParticle(p1X, detectorAndParticlePosY, p1Width, detectorAndParticleHeight, pColor);

    drawParticle(p2X, detectorAndParticlePosY, p2Width, detectorAndParticleHeight, pColor);

    // Particle Detectors
    drawDetector(d1PosX, detectorAndParticlePosY, detectorWidth, detectorAndParticleHeight, r.WHITE);
    d1Speed = geometry.handleDetectorEdgeBounce(d1PosX, d1LeftBoundarie, d1RightBoundarie, d1Speed);

    drawDetector(d2PosX, detectorAndParticlePosY, detectorWidth, detectorAndParticleHeight, r.WHITE);
    d2Speed = geometry.handleDetectorEdgeBounce(d2PosX, d2LeftBoundarie, d2RightBoundarie, d2Speed);

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