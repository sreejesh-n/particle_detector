const utils = require("./detectorUtils");
const sp = require("./setupProperties");

let color;
let detectorY = sp.HEIGHT / 2;
let velocity = 4;

const topBoundarie = sp.HEIGHT / 2 + utils.dSize;
const bottomBoundarie = sp.HEIGHT - utils.dSize - topBoundarie;

module.exports = {
  detectorY,
  velocity,
  topBoundarie,
  bottomBoundarie,
  color,
};
