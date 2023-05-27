const { minMeetingRooms } = require('./minMeetingRooms');

describe('minMeetingRooms', () => {
    it('finds min number of the rooms required', () => {
        expect(minMeetingRooms([[0, 30], [5, 10], [15, 20]])).toBe(2);
    });
});
