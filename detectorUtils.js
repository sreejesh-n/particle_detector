const r = require("raylib");
const geometry = require("./geometry");

function calcVelocity(detectorPos, detectorSize, start, end, velocity) {
  const isInsideScreen =
    detectorPos >= start && detectorPos + detectorSize <= end;

  return isInsideScreen ? velocity : -velocity;
}

function calcDetectorPosition(position, velocity) {
  return position + velocity;
}

function getDetectorColor(
  detectorPos,
  detectorSize,
  particle1Pos,
  particle1Size,
  particle2Pos,
  particle2Size,
) {
  const isP1Overlapping = geometry.isOverlapping(
    detectorPos,
    detectorSize,
    particle1Pos,
    particle1Size,
  );
  const isP2Overlapping = geometry.isOverlapping(
    detectorPos,
    detectorSize,
    particle2Pos,
    particle2Size,
  );

  const detectorColor = isP1Overlapping || isP2Overlapping ? r.RED : r.WHITE;

  return detectorColor;
}

function createDetector(size, start, end, velocity, orientation, screenSize) {
  const pos = start;

  return {
    pos,
    size,
    start,
    end,
    velocity,
    orientation,
    screenSize,
  };
}

function updateDetector(d, p1, p2) {
  d.velocity = calcVelocity(d.pos, d.size, d.start, d.end, d.velocity);
  d.pos = calcDetectorPosition(d.pos, d.velocity);
  d.color = getDetectorColor(d.pos, d.size, p1.pos, p1.size, p2.pos, p2.size);

  return d;
}

module.exports = {
  createDetector,
  updateDetector,
};
