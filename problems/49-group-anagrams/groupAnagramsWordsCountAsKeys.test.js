const { groupAnagrams } = require('./groupAnagramsWordsCountAsKeys');

describe('groupAnagrams', () => {
    it('groups anagrams', () => {
        expect(groupAnagrams(['me', 'em', 'te', 'et'])).toEqual([['me', 'em'], ['te', 'et']]);
        expect(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc']).sort()).toEqual([['bbbbbbbbbbc'], ['bdddddddddd']].sort());
    });
});
