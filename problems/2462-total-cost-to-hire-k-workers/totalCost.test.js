const { totalCost } = require('./totalCost');

describe('totalCost', () => {
    it('finds total cost', () => {
        expect(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4)).toBe(11);
    });
});
