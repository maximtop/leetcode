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
    const frequencies = [...map.keys()]
        .map((key) => {
            return { freq: map.get(key), key };
        })
        .sort((a, b) => a.freq - b.freq).map((el) => el.key);

    return frequencies.slice(frequencies.length - k, frequencies.length);
};

module.exports = { topKFrequent };
