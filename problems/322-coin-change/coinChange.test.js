const { coinChange } = require('./coinChange');

describe('coinChange', () => {
    it('finds min amount of coins', () => {
        expect(coinChange([1, 2, 5], 11)).toBe(3);
        expect(coinChange([2], 3)).toBe(-1);
    });
});
