const { maxAreaOfIsland } = require('./maxAreaOfIsland');

describe('maxAreaOfIsland', () => {
    it('finds max area of islands', () => {
        expect(maxAreaOfIsland([[0, 0, 0, 0, 0]])).toBe(0);
        expect(maxAreaOfIsland([[1, 1, 1, 1, 1]])).toBe(5);
        expect(maxAreaOfIsland([
            [1],
            [1],
            [1],
            [1],
        ])).toBe(4);
        expect(maxAreaOfIsland([
            [1, 1, 0, 0, 1],
            [1, 0, 0, 0, 1],
        ])).toBe(3);
    });
});
