const { removeKdigits } = require('./removeKdigits');

describe('removeKDigits', () => {
    it('removes k digits from number, so that output number will be the smallest', () => {
        expect(removeKdigits('1432219', 3)).toBe('1219');
        expect(removeKdigits('10200', 1)).toBe('200');
        expect(removeKdigits('10', 2)).toBe('0');
        expect(removeKdigits('9', 1)).toBe('0');
    });
});
