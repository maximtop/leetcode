/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function (intervals) {
    const start = intervals.map((i) => i[0]).sort((a, b) => a - b);
    const end = intervals.map((i) => i[1]).sort((a, b) => a - b);
    let count = 0;
    let res = 0;
    let s = 0;
    let e = 0;
    while (s < start.length) {
        if (start[s] < end[e]) {
            s += 1;
            count += 1;
        } else {
            e += 1;
            count -= 1;
        }
        res = Math.max(res, count);
    }
    return res;
};

module.exports = { minMeetingRooms };
