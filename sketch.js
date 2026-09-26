const r = require("raylib");
const math = require("./math");

const WIDTH = 1200;
const HEIGHT = 800;
const FPS = 60;

const detectorAndParticlePosY = 0;
const detectorAndParticleHeight = HEIGHT;
const detectorWidth = 80;
let detectorPosX = 0;
let detectorSpeed = 4;

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

    const particleX = WIDTH / 3;
    const particleWidth = 150;
    const particleColor = r.SKYBLUE;
    let detectorColor = isOverlapping(particleX, particleWidth, detectorPosX, detectorWidth) ? r.RED : r.WHITE;

    drawParticle(particleX, detectorAndParticlePosY, particleWidth, detectorAndParticleHeight, particleColor);

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