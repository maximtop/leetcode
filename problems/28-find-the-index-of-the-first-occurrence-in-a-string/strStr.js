/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i += 1) {
        if (haystack[i] === needle[0]) {
            let found = true;
            for (let j = 1; j < needle.length; j += 1) {
                if (haystack[i + j] !== needle[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i;
            }
        }
    }

    return -1;
};

module.exports = { strStr };
