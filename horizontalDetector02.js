const utils = require("./detectorUtils");
const sp = require("./setupProperties");

let color;
let detectorX = sp.WIDTH / 2;
let velocity = 4;

const leftBoundarie = sp.WIDTH / 2 + utils.dSize;
const rightBoundarie = sp.WIDTH - utils.dSize - leftBoundarie;

module.exports = {
  detectorX,
  velocity,
  leftBoundarie,
  rightBoundarie,
  color,
};
