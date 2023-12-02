/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeightII = function (stones) {
    const totalWeight = stones.reduce((acc, el) => acc + el, 0);
    const target = Math.floor(totalWeight / 2);
    const dp = Array(target + 1).fill(false);
    dp[0] = true;

    for (const stone of stones) {
        for (let j = target; j >= stone; j--) {
            dp[j] = dp[j] || dp[j - stone];
        }
    }

    for (let j = target; ;j -= 1) {
        if (dp[j]) {
            return totalWeight - 2 * j;
        }
    }
};

module.exports = { lastStoneWeightII };
