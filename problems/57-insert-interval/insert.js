/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
    let line = [];
    for (let i = 0; i < intervals.length; i += 1) {
        const interval = intervals[i];
        line.push(interval[0]);
        line.push(interval[1]);
    }
    line.push(newInterval[0]);
    line.push(newInterval[1]);
    line.sort((a, b) => a - b);
    line = [...new Set(line)];
    let result;
    for (let i = 0; i < line.length; i += 1) {
        
    }
};

module.exports = { insert };
