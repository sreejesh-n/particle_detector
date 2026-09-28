const r = require("raylib");
const sp = require("./setupProperties");

const hP1X = sp.WIDTH / 3;
const hP1Width = 200;

const hP2X = sp.WIDTH * (2 / 3);
const hP2Width = 20;

const vP1Y = sp.HEIGHT / 3;
const vP1Height = 30;

const vP2Y = vP1Y + 140;
const vP2Height = 150;

const pColor = r.SKYBLUE;

module.exports = {
  hP1X,
  hP1Width,
  hP2X,
  hP2Width,
  vP1Y,
  vP1Height,
  vP2Y,
  vP2Height,
  pColor,
};
