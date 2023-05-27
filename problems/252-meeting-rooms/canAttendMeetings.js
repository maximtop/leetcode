/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
const canAttendMeetings = function (intervals) {
    if (intervals.length === 0) {
        return true;
    }
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    let prevEnd = sortedIntervals[0][1];
    for (let i = 1; i < sortedIntervals.length; i += 1) {
        const [start, end] = sortedIntervals[i];
        if (start < prevEnd) {
            return false;
        }
        prevEnd = end;
    }
    return true;
};

module.exports = { canAttendMeetings };
