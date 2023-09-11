const { shortestBridge } = require('./shortestBridge');

describe('shortestBridge', () => {
    it('finds shortestBridge', () => {
        const grid = [[0, 1], [1, 0]];
        expect(shortestBridge(grid)).toBe(1);
        const grid2 = [[0, 1, 0], [0, 0, 0], [0, 0, 1]];
        expect(shortestBridge(grid2)).toBe(2);
    });
});
