const { findMin } = require('./findMin');

describe('findMin', () => {
    it('finds minimum number in the rotated ascending array', () => {
        expect(findMin([11, 12, 13, 14])).toEqual(11);
        expect(findMin([4, 5, 1, 2, 3])).toEqual(1);
        expect(findMin([3, 1, 2])).toEqual(1);
    });
});
