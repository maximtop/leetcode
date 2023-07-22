/**
 * @param {string} s
 * @return {number}
 */
const countPalindromicSubsequence = function (s) {
    const res = new Set();
    const left = new Set();
    const right = new Map();

    for (const char of s) {
        right.set(char, (right.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        if (right.has(char)) {
            right.set(char, right.get(char) - 1);
            if (right.get(char) === 0) {
                right.delete(char);
            }
        }
        for (const leftChar of left) {
            if (right.has(leftChar)) {
                res.add(`${char}:${leftChar}`);
            }
        }
        left.add(char);
    }

    return res.size;
};

module.exports = { countPalindromicSubsequence };
