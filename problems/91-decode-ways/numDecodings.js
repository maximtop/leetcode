/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
    const cache = new Map();
    cache.set(s.length, 1);
    const dfs = (i) => {
        if (cache.has(i)) {
            return cache.get(i);
        }
        if (s[i] === '0') {
            return 0;
        }
        let res = dfs(i + 1);
        if (i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && '0123456'.includes(s[i + 1])))) {
            res += dfs(i + 2);
        }
        cache.set(i, res);
        return res;
    };
    return dfs(0);
};

module.exports = { numDecodings };
