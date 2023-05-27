/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    let res = 0;
    let prevEnd = sortedIntervals[0][1];
    for (let i = 1; i < sortedIntervals.length; i += 1) {
        const [start, end] = sortedIntervals[i];
        if (start >= prevEnd) {
            prevEnd = end;
        } else {
            res += 1;
            prevEnd = Math.min(end, prevEnd);
        }
    }
    return res;
};

module.exports = { eraseOverlapIntervals };
