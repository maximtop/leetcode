const { maxVowels } = require('./maxVowels');

describe('maxVowels', () => {
    it('checks how many vowels could be in the k length substring', () => {
        expect(maxVowels('abciiidef', 3)).toBe(3);
        expect(maxVowels('aeiou', 2)).toBe(2);
        expect(maxVowels('leetcode', 3)).toBe(2);
    });
});
