const { reverseVowels } = require('./reverseVowels');

describe('reverseVowels', () => {
    it('reverses vowels in the string', () => {
        expect(reverseVowels('hello')).toBe('holle');
        expect(reverseVowels('leetcode')).toBe('leotcede');
        expect(reverseVowels('aA')).toBe('Aa');
    });
});
