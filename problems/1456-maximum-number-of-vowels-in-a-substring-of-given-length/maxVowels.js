/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let max = 0;
    let count = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (i < k) {
            if (vowels.has(s[i])) {
                count += 1;
            }
        } else {
            if (vowels.has(s[i])) {
                count += 1;
            }
            if (vowels.has(s[i - k])) {
                count -= 1;
            }
        }
        max = Math.max(max, count);
    }
    return max;
};

module.exports = { maxVowels };
