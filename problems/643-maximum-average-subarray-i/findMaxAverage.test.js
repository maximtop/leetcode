const { findMaxAverage } = require('./findMaxAverage');

describe('findMaxAverage', () => {
    it('finds max average', () => {
        expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
        expect(findMaxAverage([5], 1)).toBe(5);
        expect(findMaxAverage([4, 0, 4, 3, 3], 5)).toBe(2.8);
    });
});
