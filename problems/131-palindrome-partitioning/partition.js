/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
    const res = [];
    const part = [];

    const isPali = (s, l, r) => {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l += 1;
            r -= 1;
        }
        return true;
    };

    const dfs = (i) => {
        if (i >= s.length) {
            res.push([...part]);
            return;
        }

        for (let j = i; j < s.length; j += 1) {
            if (isPali(s, i, j)) {
                part.push(s.slice(i, j + 1));
                dfs(j + 1);
                part.pop();
            }
        }
    };

    dfs(0);
    return res;
};

module.exports = { partition };
