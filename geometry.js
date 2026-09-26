function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function isOverlapping(range1Pos, range1Size, range2Pos, range2Size) {
    const range1End = range1Pos + range1Size;
    const range2End = range2Pos + range2Size;

    return range1End >= range2Pos && range1Pos <= range2End;
}

module.exports = {
    calcOffset,
    isOverlapping,
};