const { maxProduct } = require('./maxProduct');

describe(maxProduct, () => {
    it('calculates max product', () => {
        expect(maxProduct('leetcodecom')).toBe(9);
    });
});
