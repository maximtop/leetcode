/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = function (n, roads) {
    const adj = {};
    for (const [src, dest, dist] of roads) {
        (adj[src] ??= []).push([dest, dist]);
        (adj[dest] ??= []).push([src, dist]);
    }

    const visited = new Set();
    let res = Number.MAX_VALUE;

    const dfs = (i) => {
        if (visited.has(i)) {
            return;
        }
        visited.add(i);
        for (const [nei, dist] of adj[i]) {
            res = Math.min(res, dist);
            dfs(nei);
        }
    };

    dfs(1);
    return res;
};

module.exports = { minScore };
