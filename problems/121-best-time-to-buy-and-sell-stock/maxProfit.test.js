const { maxProfit } = require('./maxProfit');

describe('maxProfit', () => {
    it('finds max profit', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });
});
