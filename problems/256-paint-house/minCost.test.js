const { minCost } = require('./minCost');

describe('minCost', () => {
    it('finds min cost to paint houses', () => {
        expect(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]])).toBe(10);
    });
});
