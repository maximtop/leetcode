const { wordBreak } = require('./wordBreak');

describe('wordBreak', () => {
    it('checks if string might be build with words in dictionary', () => {
        expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);
    });
});
