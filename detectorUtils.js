const r = require("raylib");
const math = require("./math");
const geometry = require("./geometry");

function handleDetectorEdgeBounce(position, leftBoundary, rightBoundary, speed) {
    if (position >= rightBoundary) {
        return -speed;
    }
    if (position <= leftBoundary) {
        return math.absolute(speed);
    }
    return speed;
}

function getDetectorColor(
    detectorPosition,
    detectorSize,
    particle1Pos,
    particle1Size,
    particle2Pos,
    particle2Size
) {
    const isP1Overlapping = geometry.isOverlapping(detectorPosition, detectorSize, particle1Pos, particle1Size);
    const isP2Overlapping = geometry.isOverlapping(detectorPosition, detectorSize, particle2Pos, particle2Size);

    const detectorColor = isP1Overlapping || isP2Overlapping ? r.ColorAlpha(r.RED, 0.6) : r.ColorAlpha(r.GREEN, 0.4);

    return detectorColor;
}

module.exports = {
    handleDetectorEdgeBounce,
    getDetectorColor,
}