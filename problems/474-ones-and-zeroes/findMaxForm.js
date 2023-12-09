/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = function (strs, m, n) {
    const dp = new Map();
    const dfs = (i, m, n) => {
        if (i === strs.length) {
            return 0;
        }
        const key = `${i}:${m}:${n}`;
        if (dp.has(key)) {
            return dp.get(key);
        }
        dp.set(key, dfs(i + 1, m, n));
        const mCount = strs[i].split('').filter((el) => el === '0').length;
        const nCount = strs[i].split('').filter((el) => el === '1').length;
        if (m - mCount >= 0 && n - nCount >= 0) {
            dp.set(key, Math.max(
                dp.get(key),
                1 + dfs(i + 1, m - mCount, n - nCount),
            ));
        }
        return dp.get(key);
    };
    return dfs(0, m, n);
};

module.exports = { findMaxForm };
