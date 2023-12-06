const { minPathSum } = require('./minPathSum');

describe('minPathSum', () => {
    it('finds minimum path sum', () => {
        expect(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toBe(7);
    });
});
