/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    const map = {};
    let left = 0;
    let right = 0;
    let res = 0;
    while (right < s.length) {
        const char = s[right];
        map[char] = map[char] ? map[char] + 1 : 1;

        while (map[char] > 1) {
            const leftChar = s[left];
            map[leftChar] -= 1;
            left += 1;
        }

        res = Math.max(res, right - left + 1);

        right += 1;
    }
    return res;
};

module.exports = { lengthOfLongestSubstring };
