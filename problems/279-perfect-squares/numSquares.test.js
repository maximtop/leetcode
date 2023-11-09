const { numSquares } = require('./numSquares');

describe('numSquares', () => {
    it('finds min number of perfect squares', () => {
        expect(numSquares(12)).toBe(3);
    });
});
