const { nextGreatestLetter } = require('./nextGreatestLetter');

describe('nextGreatestLetter', () => {
    it('finds next greatest letter', () => {
        expect(nextGreatestLetter(['a', 'a', 'b', 'c'], 'b')).toBe('c');
        expect(nextGreatestLetter(['b', 'b', 'c'], 'a')).toBe('b');
        expect(nextGreatestLetter(['c', 'f', 'j'], 'a')).toBe('c');
        expect(nextGreatestLetter(['c', 'f', 'j'], 'c')).toBe('f');
        expect(nextGreatestLetter(['c', 'f', 'j'], 'd')).toBe('f');
    });
});
