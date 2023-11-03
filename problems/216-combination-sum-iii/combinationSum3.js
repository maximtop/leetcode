/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
    const result = [];
    const backtracking = (remain, comb, next) => {
        if (remain === 0 && comb.length === k) {
            result.push([...comb]);
        }
        if (remain < 0 || comb.length === k) {
            return;
        }
        for (let i = next; i < 9; i += 1) {
            comb.push(i + 1);
            backtracking(remain - i - 1, comb, i + 1);
            comb.pop();
        }
    };

    backtracking(n, [], 0);
    return result;
};

module.exports = { combinationSum3 };
