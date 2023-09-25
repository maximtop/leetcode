/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    const res = [];
    const backtrack = (start, comb) => {
        if (comb.length === k) {
            res.push([...comb]);
            return;
        }
        for (let i = start; i < n + 1; i += 1) {
            comb.push(i);
            backtrack(i + 1, comb);
            comb.pop();
        }
    };
    backtrack(1, []);
    return res;
};

module.exports = { combine };
