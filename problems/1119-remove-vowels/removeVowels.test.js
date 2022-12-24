const { removeVowels } = require('./removeVowels');

describe('removeVowels', () => {
    it('removes vowels', () => {
        expect(removeVowels('aeio')).toBe('');
    });
});
