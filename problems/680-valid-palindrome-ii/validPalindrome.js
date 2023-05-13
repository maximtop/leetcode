/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;

    const isPalindrome = (start, end) => {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start += 1;
            end -= 1;
        }
        return true;
    };

    while (start < end) {
        if (s[start] !== s[end]) {
            return isPalindrome(start + 1, end) || isPalindrome(start, end - 1);
        }
        start += 1;
        end -= 1;
    }

    return true;
};

module.exports = { validPalindrome };
