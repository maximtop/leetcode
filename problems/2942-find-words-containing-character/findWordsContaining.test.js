const { findWordsContaining } = require('./findWordsContaining');

describe('findWordsContaining', () => {
    it('finds words containing character', () => {
        expect(findWordsContaining(['test', 'aaa', 'ab'], 'a')).toEqual([1, 2]);
    });
});
