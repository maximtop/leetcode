const { countSubIslands } = require('./countSubIslands');

describe('countSubIslands', () => {
    it('counts sub islands', () => {
        const grid1 = [[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]];
        const grid2 = [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]];
        expect(countSubIslands(grid1, grid2)).toBe(3);
    });
});
