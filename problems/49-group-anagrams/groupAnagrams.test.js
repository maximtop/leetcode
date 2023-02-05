const { groupAnagrams } = require('./groupAnagrams');

describe('groupAnagrams', () => {
    it('groups anagrams', () => {
        expect(groupAnagrams(['me', 'em', 'te', 'et'])).toEqual([['me', 'em'], ['te', 'et']]);
    });
});
