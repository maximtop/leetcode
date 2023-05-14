const { isPalindrome } = require('./isPalindrome');

describe('isPalindrome', () => {
    it('detects if number is palindrome', () => {
        expect(isPalindrome(121)).toBe(true);
    });
});
