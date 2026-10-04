const r = require("raylib");

function createParticle(pos, size, orientation, screenSize) {
  const color = r.SKYBLUE;

  return { pos, size, orientation, screenSize, color };
}

module.exports = {
  createParticle,
};
