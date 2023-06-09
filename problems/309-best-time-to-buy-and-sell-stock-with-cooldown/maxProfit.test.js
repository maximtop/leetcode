const { maxProfit } = require('./maxProfit');

describe('maxProfit', () => {
    it('finds max profit', () => {
        expect(maxProfit([1, 2, 3, 0, 2])).toBe(3);
    });
});
