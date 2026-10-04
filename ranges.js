const r = require("raylib");

function drawRange(range) {
  if (range.orientation === "Horizontal") {
    r.DrawRectangle(range.pos, 0, range.size, range.screenSize, range.color);
  } else {
    r.DrawRectangle(0, range.pos, range.screenSize, range.size, range.color);
  }
}

function drawDetector(d) {
  drawRange(d);
}

function drawParticle(p) {
  drawRange(p);
}

module.exports = {
  drawDetector,
  drawParticle,
};
