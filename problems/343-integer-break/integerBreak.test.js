const { integerBreak } = require('./integerBreak');

describe('integerBreak', () => {
    it('finds max product', () => {
        expect(integerBreak(2)).toBe(1);
        expect(integerBreak(3)).toBe(2);
        expect(integerBreak(10)).toBe(36);
    });
});
