const { maxProfit } = require('./maxProfit');

describe('maxProfit', () => {
    it('calculates max profit', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
    });
});
