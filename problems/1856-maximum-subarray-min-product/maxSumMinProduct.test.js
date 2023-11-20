const { maxSumMinProduct } = require('./maxSumMinProduct');

describe('maxSumMinProduct', () => {
    it('find max min product', () => {
        expect(maxSumMinProduct([1, 2, 3, 2])).toBe(14);
    });
});
