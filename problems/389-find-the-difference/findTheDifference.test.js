const { findTheDifference } = require('./findTheDifference');

describe('findTheDifference', () => {
    it('finds difference', () => {
        expect(findTheDifference('abcd', 'abcde')).toBe('e');
    });
});
