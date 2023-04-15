const { characterReplacement } = require('./characterReplacement');

describe('characterReplacement', () => {
    it('finds max len', () => {
        // expect(characterReplacement('ABAB', 2)).toBe(4);
        expect(characterReplacement('AABABBA', 1)).toBe(4);
    });
});
