const { minReorder } = require('./minReorder');

describe('minReorder', () => {
    it('finds min changes', () => {
        const n = 6;
        const connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]];
        expect(minReorder(n, connections)).toBe(3);
    });
});
