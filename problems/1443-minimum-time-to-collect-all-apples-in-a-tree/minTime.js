/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
const minTime = function (n, edges, hasApple) {
    const adjacentMap = {};
    for (let i = 0; i < n; i += 1) {
        adjacentMap[i] = [];
    }

    for (const edge of edges) {
        adjacentMap[edge[0]].push(edge[1]);
        adjacentMap[edge[1]].push(edge[0]);
    }

    const dfs = (cur, par) => {
        let time = 0;
        for (const child of adjacentMap[cur]) {
            if (child === par) {
                continue;
            }
            const childTime = dfs(child, cur);
            if (childTime || hasApple[child]) {
                time += 2 + childTime;
            }
        }
        return time;
    };

    return dfs(0, -1);
};

module.exports = { minTime };
