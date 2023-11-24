const { findAllConcatenatedWordsInADict } = require('./findAllConcatenatedWordsInADict');

describe('findAllConcatenatedWordsInADict', () => {
    it('finds concatenated words in dict', () => {
        expect(findAllConcatenatedWordsInADict(['cat', 'cats', 'catsdogcats', 'dog', 'dogcatsdog', 'hippopotamuses', 'rat', 'ratcatdogcat']))
            .toEqual(['catsdogcats', 'dogcatsdog', 'ratcatdogcat']);

        // funny case with word "constructor", cant have cache like an empty object "{}",
        // since it has constructor inside
        expect(findAllConcatenatedWordsInADict(['abnormals', 'brick', 'constructor', 'embezzling']))
            .toEqual([]);
    });
});
