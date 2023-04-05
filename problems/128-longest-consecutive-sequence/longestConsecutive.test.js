const { longestConsecutive } = require('./longestConsecutive');

describe('longestConsecutive', () => {
    it('finds longest consecutive in O(n)', () => {
        expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
    });
});
