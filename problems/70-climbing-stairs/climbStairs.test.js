const { climbStairs } = require('./climbStairs');

describe('climbStairs', () => {
    it('calculates possible was to climb', () => {
        expect(climbStairs(1)).toBe(1);
        expect(climbStairs(2)).toBe(2);
        expect(climbStairs(3)).toBe(3);
        expect(climbStairs(4)).toBe(5);
    });
});
