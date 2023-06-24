const { maxFrequency } = require('./maxFrequency');

describe('maxFrequency', () => {
    it('finds max frequency', () => {
        expect(maxFrequency([1, 2, 4], 5)).toBe(3);
        expect(maxFrequency([1, 4, 8, 13], 5)).toBe(2);
    });
});
