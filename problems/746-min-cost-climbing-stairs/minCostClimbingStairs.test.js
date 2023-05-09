const { minCostClimbingStairs } = require('./minCostClimbingStairs');

describe('minCostClimbingStairs', () => {
    it('finds min cost of climbing', () => {
        expect(minCostClimbingStairs([10, 15, 20])).toEqual(15);
    });
});
