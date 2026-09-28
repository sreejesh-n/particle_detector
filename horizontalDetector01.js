const utils = require("./detectorUtils");
const sp = require("./setupProperties");

let color;
let detectorX = 0;
let velocity = 3;

const leftBoundarie = utils.dSize;
const rightBoundarie = sp.WIDTH / 2 - utils.dSize * 2;

module.exports = {
  detectorX,
  velocity,
  leftBoundarie,
  rightBoundarie,
  color,
};
