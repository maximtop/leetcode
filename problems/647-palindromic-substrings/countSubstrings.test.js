const { countSubstrings } = require('./countSubstrings');

describe('countSubstrings', () => {
    it('counts palindromic substrings', () => {
        expect(countSubstrings('abc')).toBe(3);
        expect(countSubstrings('aaa')).toBe(6);
    });
});
