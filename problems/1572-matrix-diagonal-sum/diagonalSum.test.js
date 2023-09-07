const { diagonalSum } = require('./diagonalSum');

describe('diagonalSum', () => {
    it('calculates diagonal sum of matrix', () => {
        const mat = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        expect(diagonalSum(mat)).toBe(25);
    });
});
