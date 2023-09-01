const { islandPerimeter } = require('./islandPerimeter');

describe('islandPerimeter', () => {
    it('finds perimeter', () => {
        const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];
        expect(islandPerimeter(grid)).toBe(16);
        const grid2 = [[1, 0]];
        expect(islandPerimeter(grid2)).toBe(4);
    });
});
