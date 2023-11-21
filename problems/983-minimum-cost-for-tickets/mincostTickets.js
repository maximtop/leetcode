/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function (days, costs) {
    const dp = {};
    const pass = [1, 7, 30];
    const dfs = (i) => {
        if (i >= days.length) {
            return 0;
        }
        if (i in dp) {
            return dp[i];
        }
        dp[i] = Number.MAX_VALUE;
        for (let idx = 0; idx < costs.length; idx += 1) {
            const d = pass[idx];
            const c = costs[idx];
            let j = i;
            while (j < days.length && days[j] < days[i] + d) {
                j += 1;
            }
            dp[i] = Math.min(dp[i], c + dfs(j));
        }
        return dp[i];
    };
    return dfs(0);
};

module.exports = { mincostTickets };
