const { shortestPathBinaryMatrix } = require('./shortestPathBinaryMatrix');

describe('shortestPathBinaryMatrix', () => {
    it('finds shortest path', () => {
        const grid = [
            [0, 1],
            [1, 0],
        ];
        expect(shortestPathBinaryMatrix(grid)).toBe(2);

        const grid2 = [
            [0, 0, 0],
            [1, 1, 0],
            [1, 1, 0],
        ];
        expect(shortestPathBinaryMatrix(grid2)).toBe(4);

        const grid3 = [
            [0, 0, 0],
            [1, 0, 0],
            [1, 1, 0],
        ];
        expect(shortestPathBinaryMatrix(grid3)).toBe(3);
    });
});
