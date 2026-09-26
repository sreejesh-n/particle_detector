const math = require("./math");
const geometry = require("./geometry");

function handleDetectorEdgeBounce(posX, leftBoundary, rightBoundary, speed) {
    if (posX >= rightBoundary) {
        return -speed;
    }
    if (posX <= leftBoundary) {
        return math.absolute(speed);
    }
    return speed;
}

function isParticleDetected(dposX, dWidth, p1X, p1Width, p2X, p2Width) {
    const isP1Overlapping = geometry.isOverlapping(dposX, dWidth, p1X, p1Width);
    const isP2Overlapping = geometry.isOverlapping(dposX, dWidth, p2X, p2Width);

    return isP1Overlapping || isP2Overlapping;
}

module.exports = {
    handleDetectorEdgeBounce,
    isParticleDetected,
}