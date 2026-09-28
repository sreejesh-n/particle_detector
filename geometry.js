function calcOffset(outer, inner) {
  return (outer - inner) / 2;
}

function isOverlapping(range1Start, range1Size, range2Start, range2Size) {
  const range1End = range1Start + range1Size;
  const range2End = range2Start + range2Size;

  return range1End >= range2Start && range2End >= range1Start;
}

module.exports = {
  calcOffset,
  isOverlapping,
};
