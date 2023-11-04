/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
    const sum = nums.reduce((a, b) => a + b);
    // is sum is odd there won't be possibility to partition
    if (sum % 2 !== 0) {
        return false;
    }
    // target equals to the sum divided by 2
    const target = sum / 2;
    let dp = new Set();
    dp.add(0);
    for (let i = 0; i < nums.length; i += 1) {
        const n = nums[i];
        if (n === target) {
            return true;
        }
        const nextDp = new Set();
        for (const t of dp) {
            const s = t + n;
            if (s === target) {
                return true;
            }
            nextDp.add(t);
            if (s < target) {
                nextDp.add(s);
            }
        }
        dp = nextDp;
    }
    return dp.has(target);
};

module.exports = { canPartition };
