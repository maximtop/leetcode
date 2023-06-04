const { minCostConnectPoints } = require('./minCostConnectPoints');

describe('minCostConnectPoints', () => {
    it('finds min cost to connect points', () => {
        expect(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]])).toBe(20);
    });
});
