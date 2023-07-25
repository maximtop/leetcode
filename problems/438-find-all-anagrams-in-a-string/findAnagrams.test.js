const { findAnagrams } = require('./findAnagrams');

describe('findAnagrams', () => {
    it('finds anagrams', () => {
        expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
    });
});
