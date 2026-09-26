const r = require("raylib");
const utils = require("./detectorUtils");

const WIDTH = 1200;
const HEIGHT = 800;
const FPS = 60;

const detectorSize = 70;

let hDetector1X = 0;
let hD1Speed = 3;

let hDetector2X = WIDTH / 2;
let hD2Speed = 4;

let vDetector1Y = 0;
let vD1Speed = 3;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Particle Detector");
    r.SetTargetFPS(FPS);
}

function update() {
    const hD1LeftBoundarie = 0;
    const hD1RightBoundarie = WIDTH / 2 - detectorSize;

    const hD2LeftBoundarie = WIDTH / 2;
    const hD2RightBoundarie = WIDTH - detectorSize;

    const vD1LeftBoundarie = 0;
    const vD1RightBoundarie = HEIGHT - detectorSize;

    hD1Speed = utils.handleDetectorEdgeBounce(
        hDetector1X,
        hD1LeftBoundarie,
        hD1RightBoundarie,
        hD1Speed,
    );

    hDetector1X += hD1Speed;

    hD2Speed = utils.handleDetectorEdgeBounce(
        hDetector2X,
        hD2LeftBoundarie,
        hD2RightBoundarie,
        hD2Speed,
    );

    hDetector2X += hD2Speed;


    vD1Speed = utils.handleDetectorEdgeBounce(
        vDetector1Y,
        vD1LeftBoundarie,
        vD1RightBoundarie,
        vD1Speed,
    );

    vDetector1Y += vD1Speed;
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

    const pColor = r.SKYBLUE;

    // Detector-related properties
    let hD1Color = utils.getDetectorColor(
        hDetector1X,
        detectorSize,
        hP1X,
        hP1Width,
        hP2X,
        hP2Width,
    );

    let hD2Color = utils.getDetectorColor(
        hDetector2X,
        detectorSize,
        hP1X,
        hP1Width,
        hP2X,
        hP2Width,
    );

    let vD1Color = utils.getDetectorColor(vDetector1Y, detectorSize, vP1Y, vP1Height);

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
