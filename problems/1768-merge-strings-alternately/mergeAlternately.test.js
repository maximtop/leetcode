const { mergeAlternately } = require('./mergeAlternately');

describe('mergeAlternately', () => {
    it('merges alternately', () => {
        // expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
        expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
    });
});
