/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
    const sortedPoints = points.sort((a, b) => {
        return a[1] - b[1];
    });

    let arrows = 1;
    let currentEnd = sortedPoints[0][1];
    for (const [start, end] of sortedPoints) {
        if (currentEnd < start) {
            arrows += 1;
            currentEnd = end;
        }
    }
    return arrows;
};

module.exports = { findMinArrowShots };
