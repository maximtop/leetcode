const { findMinArrowShots } = require('./findMinArrowShots');

describe('findMinArrowShots', () => {
    it('finds min arrow necessary', () => {
        expect(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])).toBe(2);
    });
});
