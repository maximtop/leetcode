const { maxProduct } = require('./maxProduct');

describe('maxProduct', () => {
    it('finds max product', () => {
        expect(maxProduct([2, 3, -2, 4])).toBe(6);
        expect(maxProduct([-2, 0, -1])).toBe(0);
        expect(maxProduct([3, -1, 4])).toBe(4);
    });
});
