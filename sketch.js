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
let detectorColor = r.WHITE;


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

function draw() {
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);

    const particleX = WIDTH / 3;
    const particleWidth = 150;
    const particleColor = r.SKYBLUE;

    drawRange(particleX, detectorAndParticlePosY, particleWidth, detectorAndParticleHeight, particleColor);

    drawDetector(detectorPosX, detectorAndParticlePosY, detectorWidth, detectorAndParticleHeight, r.WHITE);

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