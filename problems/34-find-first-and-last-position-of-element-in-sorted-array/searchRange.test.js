const { searchRange } = require('./searchRange');

describe('searchRange', () => {
    it('finds start and end of the range', () => {
        expect(searchRange([1, 2, 3, 3, 4], 3)).toEqual([2, 3]);
        expect(searchRange([1, 2, 3, 3, 4], 5)).toEqual([-1, -1]);
    });
});
