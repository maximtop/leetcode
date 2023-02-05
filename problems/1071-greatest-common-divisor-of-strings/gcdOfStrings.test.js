const { gcdOfStrings } = require('./gcdOfStrings');

describe('gcdOfStrings', () => {
    it('finds gcd of strings', () => {
        expect(gcdOfStrings('abab', 'ab')).toBe('ab');
        expect(gcdOfStrings('abc', 'cdf')).toBe('');
    });
});
