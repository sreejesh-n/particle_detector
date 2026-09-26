function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function isOverlapping(range1X, range1Width, range2X, range2Width) {
    const range1EndX = range1X + range1Width;
    const range2EndX = range2X + range2Width;

    return range1EndX >= range2X && range1X <= range2EndX;
}

module.exports = {
    calcOffset,
    isOverlapping,
};