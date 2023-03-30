const { isAnagram } = require('./isAnagram');

describe('isAnagram', () => {
    it('detects if two words are anagram', () => {
        expect(isAnagram('mum', 'umm')).toBeTruthy();
    });
});
