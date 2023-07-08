const { findDifference } = require('./findDifference');

describe('findDifference', () => {
    it('finds difference', () => {
        expect(findDifference([1, 2, 3], [2, 4, 6])).toEqual([[1, 3], [4, 6]]);
    });
});
