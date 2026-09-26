const r = require("raylib");
const math = require("./math");

const WIDTH = 1200;
const HEIGHT = 800;
const FPS = 60;

const detectorAndParticlePosY = 0;
const detectorAndParticleHeight = HEIGHT;
const detectorWidth = 80;
let detectorPosX = 0;
let detectorSpeed = 3;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Particle Detector");
    r.SetTargetFPS(FPS);
}

function handleDetectorEdgeBounce() {
    if (detectorPosX >= WIDTH - detectorWidth) {
        detectorSpeed = -detectorSpeed;
    }
    if (detectorPosX <= 0) {
        detectorSpeed = math.absolute(detectorSpeed);
    }
}

function isOverlapping(range1X, range1Width, range2X, range2Width) {
    const range1EndX = range1X + range1Width;
    const range2EndX = range2X + range2Width;

    return range1EndX >= range2X && range1X <= range2EndX;
}

function update() {
    handleDetectorEdgeBounce();
    detectorPosX += detectorSpeed;
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

    const pColor = r.SKYBLUE;
    const p1X = WIDTH / 3;
    const p1Width = 150;

    const p2X = WIDTH * (2 / 3);
    const p2Width = 20;

    let detectorColor = isOverlapping(p1X, p1Width, detectorPosX, detectorWidth) ||
        isOverlapping(p2X, p2Width, detectorPosX, detectorWidth) ? r.ColorAlpha(r.RED, 0.6) : r.WHITE;

    drawParticle(p1X, detectorAndParticlePosY, p1Width, detectorAndParticleHeight, pColor);

    drawParticle(p2X, detectorAndParticlePosY, p2Width, detectorAndParticleHeight, pColor);

    drawDetector(detectorPosX, detectorAndParticlePosY, detectorWidth, detectorAndParticleHeight, detectorColor);

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