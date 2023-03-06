const { findKthPositive } = require('./findKthPositive');

describe('findKthPositive', () => {
    it('finds kth positive number', () => {
        expect(findKthPositive([1, 2, 3, 4], 2)).toBe(6);
        expect(findKthPositive([2, 4], 3)).toBe(5);
    });
});
