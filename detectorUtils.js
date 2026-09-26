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

function isParticleDetected(detectorPosition, detectorSize, particle1Pos, particle1Size, particle2Pos, particle2Size) {
    const isP1Overlapping = geometry.isOverlapping(detectorPosition, detectorSize, particle1Pos, particle1Size);
    const isP2Overlapping = geometry.isOverlapping(detectorPosition, detectorSize, particle2Pos, particle2Size);

    return isP1Overlapping || isP2Overlapping;
}

module.exports = {
    handleDetectorEdgeBounce,
    isParticleDetected,
}