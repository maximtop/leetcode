/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
    const set = new Set(arr);
    let counter = 0;
    let start = 1;
    while (counter < k) {
        if (!set.has(start)) {
            counter += 1;
        }
        start += 1;
    }
    return start - 1;
};

module.exports = { findKthPositive };
