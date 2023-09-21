const { minScore } = require('./minScore');

describe('minScore', () => {
    it('finds min score', () => {
        const n = 4;
        const roads = [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]];
        expect(minScore(n, roads)).toBe(5);
    });
});
