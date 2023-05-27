const { canAttendMeetings } = require('./canAttendMeetings');

describe('canAttendMeetings', () => {
    it('detects if intervals are not overlapping', () => {
        expect(canAttendMeetings([[0, 30], [5, 10], [15, 20]])).toBe(false);
        expect(canAttendMeetings([[7, 10], [2, 4]])).toBe(true);
        expect(canAttendMeetings([])).toBe(true);
        expect(canAttendMeetings([[1, 2]])).toBe(true);
    });
});
