const { searchInsert } = require('./searchInsert');

describe('searchInsert', () => {
    it('finds place to insert node', () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    });
});
