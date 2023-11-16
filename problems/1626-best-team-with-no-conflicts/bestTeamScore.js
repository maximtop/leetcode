/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
const bestTeamScore = function (scores, ages) {
    const pairs = scores
        .map((score, idx) => [score, ages[idx]])
        .sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }
            return a[0] - b[0];
        }); // sort by scores
    const dp = pairs.map((p) => p[0]); // initiate with scores
    for (let i = 0; i < pairs.length; i += 1) {
        const [mScore, mAge] = pairs[i];
        for (let j = 0; j < i; j += 1) {
            const [, age] = pairs[j];
            if (mAge >= age) {
                dp[i] = Math.max(dp[i], mScore + dp[j]);
            }
        }
    }
    return Math.max(...dp);
};

module.exports = { bestTeamScore };
