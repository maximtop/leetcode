const { wordPattern } = require('./wordPattern');

describe('wordPattern', () => {
    it('detects if string has the same patter as the word', () => {
        expect(wordPattern('abba', 'dog cat cat dog')).toEqual(true);
        expect(wordPattern('a', 'dog')).toEqual(true);
        expect(wordPattern('aa', 'dog dog')).toEqual(true);
        expect(wordPattern('aa', 'dog dog dog')).toEqual(false);
        expect(wordPattern('aa', 'dog dog cat')).toEqual(false);
        expect(wordPattern('abba', 'dog dog dog dog')).toEqual(false);
    });
});
