const { maxScore } = require('./maxScore');

describe('maxScore', () => {
    it('finds max score', () => {
        expect(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3)).toBe(12);
        expect(maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1)).toBe(30);
        expect(maxScore([2, 1, 14, 12], [11, 7, 13, 6], 3)).toBe(168);
    });
});
