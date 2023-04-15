/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
    let maxFrequency = 0;
    let left = 0;
    const countMap = {};
    let result = 0;
    for (let right = 0; right < s.length; right += 1) {
        countMap[s[right]] = 1 + (countMap[s[right]] ?? 0);
        maxFrequency = Math.max(maxFrequency, countMap[s[right]]);

        while ((right - left + 1) - maxFrequency > k) {
            countMap[s[left]] -= 1;
            left += 1;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};

module.exports = { characterReplacement };
