/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    const bucket = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [num, frequency] of map.entries()) {
        if (bucket[frequency]) {
            bucket[frequency].push(num);
        } else {
            bucket[frequency] = [num];
        }
    }

    const result = [];
    for (let i = bucket.length - 1; i >= 0; i -= 1) {
        const nums = bucket[i];
        for (let j = 0; nums && j < nums.length; j += 1) {
            result.push(nums[j]);
            if (result.length >= k) {
                return result;
            }
        }
    }

    return result;
};

module.exports = { topKFrequent };
