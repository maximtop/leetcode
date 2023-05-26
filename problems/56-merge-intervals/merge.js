/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    const sorted = intervals.sort((a, b) => a[0] - b[0]);
    const output = [sorted[0]];
    for (let i = 1; i < sorted.length; i += 1) {
        const lastEnd = output[output.length - 1][1];
        const [start, end] = sorted[i];
        if (start <= lastEnd) {
            output[output.length - 1][1] = Math.max(lastEnd, end);
        } else {
            output.push([start, end]);
        }
    }
    return output;
};

module.exports = { merge };
