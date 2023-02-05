/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
    const map = {};
    for (let i = 0; i < nums.length; i += 1) {
        const char = nums[i];
        if (map[char] !== undefined) {
            const dist = Math.abs(map[char] - i);
            if (dist <= k) {
                return true;
            }
        }
        map[char] = i;
    }
    return false;
};

module.exports = { containsNearbyDuplicate };
