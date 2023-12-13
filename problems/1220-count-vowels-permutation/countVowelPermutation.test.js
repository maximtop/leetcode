const { countVowelPermutation } = require('./countVowelPermutation');
const { countVowelPermutationMemoryOptimized } = require('./countVowelPermutationMemoryOptimized');

describe('countVowelPermutation', () => {
    it('counts vowel permutations considering rules', () => {
        expect(countVowelPermutation(1)).toBe(5);
        expect(countVowelPermutation(0)).toBe(0);
        expect(countVowelPermutation(2)).toBe(10);
        expect(countVowelPermutation(5)).toBe(68);
    });
});

describe('countVowelPermutationMemoryOptimized', () => {
    it('counts vowel permutations considering rules', () => {
        expect(countVowelPermutationMemoryOptimized(1)).toBe(5);
        expect(countVowelPermutationMemoryOptimized(0)).toBe(0);
        expect(countVowelPermutationMemoryOptimized(2)).toBe(10);
        expect(countVowelPermutationMemoryOptimized(5)).toBe(68);
    });
});
