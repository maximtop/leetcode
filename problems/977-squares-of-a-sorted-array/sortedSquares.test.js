const { sortedSquares } = require('./sortedSquares');

describe('sortedSquares', () => {
    it('sorts', () => {
        expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    });
});
