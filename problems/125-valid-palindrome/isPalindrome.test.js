const { isPalindrome } = require('./isPalindrome');

describe('isPalindrome', () => {
    it('checks if string is palindrome', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
        expect(isPalindrome(' ')).toBe(true);
    });
});
