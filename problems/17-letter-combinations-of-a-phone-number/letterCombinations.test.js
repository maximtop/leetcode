const { letterCombinations } = require('./letterCombinations');

describe('letterCombinations', () => {
    it('finds all possible letter combinations', () => {
        expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
        expect(letterCombinations('')).toEqual([]);
    });
});
