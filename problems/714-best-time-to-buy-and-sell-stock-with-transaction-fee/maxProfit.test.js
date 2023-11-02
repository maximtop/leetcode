const { maxProfit } = require('./maxProfit');

describe('maxProfit', () => {
    it('finds max profit', () => {
        expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8);
    });
});
