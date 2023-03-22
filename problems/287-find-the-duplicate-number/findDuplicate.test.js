const { findDuplicate } = require('./findDuplicate');

describe('findDuplicate', () => {
    it('finds duplicate', () => {
        expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
    });
});
