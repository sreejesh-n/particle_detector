const utils = require("./detectorUtils");
const sp = require("./setupProperties");

let color;
let detectorY = 0;
let velocity = 3;

const topBoundarie = utils.dSize;
const bottomBoundarie = sp.HEIGHT / 2 - utils.dSize * 2;

module.exports = {
  detectorY,
  velocity,
  topBoundarie,
  bottomBoundarie,
  color,
};
