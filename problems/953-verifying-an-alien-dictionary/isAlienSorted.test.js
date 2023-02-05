const { isAlienSorted } = require('./isAlienSorted');

describe('isAlienSorted', () => {
    it('checks', () => {
        let words = ['hello', 'leetcode'];
        let order = 'hlabcdefgijkmnopqrstuvwxyz';
        expect(isAlienSorted(words, order)).toBe(true);

        // words = ['word', 'world', 'row'];
        // order = 'worldabcefghijkmnpqstuvxyz';
        // expect(isAlienSorted(words, order)).toBe(false);

        words = ['apple', 'app'];
        order = 'abcdefghijklmnopqrstuvwxyz';
        expect(isAlienSorted(words, order)).toBe(false);
    });
});
