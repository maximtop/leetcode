/**
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints = function (questions) {
    const dp = {};

    for (let i = questions.length - 1; i >= 0; i -= 1) {
        dp[i] = Math.max(
            questions[i][0] + (dp[i + 1 + questions[i][1]] ?? 0), // if we solve a current task
            dp[i + 1] ?? 0, // if we skip a current task
        );
    }

    return dp[0];
};

module.exports = { mostPoints };
