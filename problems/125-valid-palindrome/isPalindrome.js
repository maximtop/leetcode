const isAlphanumeric = (char) => {
    return /^[a-z0-9]+$/i.test(char);
};
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
        while (!isAlphanumeric(s[start]) && start < end) {
            start += 1;
        }
        while (!isAlphanumeric(s[end]) && end > start) {
            end -= 1;
        }
        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        start += 1;
        end -= 1;
    }
    return true;
};

module.exports = { isPalindrome };
