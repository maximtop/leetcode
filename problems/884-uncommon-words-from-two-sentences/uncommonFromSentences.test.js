const { uncommonFromSentences } = require('./uncommonFromSentences');

describe('uncommonFromSentences', () => {
    it('finds uncommon words', () => {
        const s1 = 'this is me';
        const s2 = 'this is you';
        expect(uncommonFromSentences(s1, s2)).toEqual(['me', 'you']);
    });
});
