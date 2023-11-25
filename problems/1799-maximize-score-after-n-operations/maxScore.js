const gcd = function (a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxScore = function (nums) {
    const cache = {};
    const dfs = (mask, op) => {
        if (cache[mask]) {
            return cache[mask];
        }

        for (let i = 0; i < nums.length; i += 1) {
            for (let j = i + 1; j < nums.length; j += 1) {
                if (((1 << i) & mask) || ((1 << j) & mask)) {
                    continue;
                }
                const newMask = mask | (1 << i) | (1 << j);
                const score = op * gcd(nums[i], nums[j]);
                cache[mask] = Math.max(
                    cache[mask] ?? 0,
                    score + dfs(newMask, op + 1),
                );
            }
        }
        return cache[mask] ?? 0;
    };
    return dfs(0, 1);
};

module.exports = { maxScore };
