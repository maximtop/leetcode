const { reverseWords, reverseWordsNatives } = require('./reverseWords');

describe('reverseWords', () => {
    it('reverses words', () => {
        expect(reverseWords('  hello world  ')).toEqual('world hello');
    });
});

describe('reverseWordsNatives', () => {
    it('reverses words', () => {
        expect(reverseWordsNatives('  hello world  ')).toEqual('world hello');
    });
});
