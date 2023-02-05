const { sortSentence } = require('./sortSentence');

describe('sortSentence', () => {
    it('sorts', () => {
        expect(sortSentence('is2 sentence4 This1 a3')).toBe('This is a sentence');
    });
});
