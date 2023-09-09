const { gridGame } = require('./gridGame');

describe('gridGame', () => {
    it('finds max points collected by second robot', () => {
        const grid = [[2, 5, 4], [1, 5, 1]];
        expect(gridGame(grid)).toBe(4);
    });
});
