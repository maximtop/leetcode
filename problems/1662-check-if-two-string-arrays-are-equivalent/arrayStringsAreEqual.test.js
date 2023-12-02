const { arrayStringsAreEqual } = require('./arrayStringsAreEqual');

describe('arrayStringsAreEqual', () => {
    it('checks if strings are equal', () => {
        expect(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc'])).toBe(true);
    });
});
