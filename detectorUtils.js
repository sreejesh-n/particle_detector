const r = require("raylib");
const geometry = require("./geometry");

function calcVelocity(
  detectorPos,
  detectorSize,
  screenStart,
  screenEnd,
  velocity,
) {
  const isInsideScreen = geometry.isOverlapping(
    detectorPos,
    detectorSize,
    screenStart,
    screenEnd,
  );

  return isInsideScreen ? velocity : -velocity;
}

function getDetectorColor(
  detectorPosition,
  detectorSize,
  particle1Pos,
  particle1Size,
  particle2Pos,
  particle2Size,
) {
  const isP1Overlapping = geometry.isOverlapping(
    detectorPosition,
    detectorSize,
    particle1Pos,
    particle1Size,
  );
  const isP2Overlapping = geometry.isOverlapping(
    detectorPosition,
    detectorSize,
    particle2Pos,
    particle2Size,
  );

  const detectorColor =
    isP1Overlapping || isP2Overlapping
      ? r.ColorAlpha(r.RED, 0.6)
      : r.ColorAlpha(r.GREEN, 0.4);

  return detectorColor;
}

module.exports = {
  calcVelocity,
  getDetectorColor,
};
