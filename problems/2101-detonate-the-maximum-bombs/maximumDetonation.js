/**
 * @param {number[][]} bombs
 * @return {number}
 */
const maximumDetonation = function (bombs) {
    const adj = {};
    for (let i = 0; i < bombs.length; i += 1) {
        for (let j = i + 1; j < bombs.length; j += 1) {
            const [x1, y1, r1] = bombs[i];
            const [x2, y2, r2] = bombs[j];
            const d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
            if (r1 >= d) {
                (adj[i] ??= []).push(j);
            }
            if (r2 >= d) {
                (adj[j] ??= []).push(i);
            }
        }
    }
    const dfs = (i, visited) => {
        if (visited[i]) {
            return 0;
        }
        visited[i] = true;
        for (const nei of (adj[i] ??= [])) {
            dfs(nei, visited);
        }
        return visited.filter((i) => i).length;
    };
    let res = 0;
    for (let i = 0; i < bombs.length; i += 1) {
        res = Math.max(res, dfs(i, Array(bombs.length)));
    }
    return res;
};

module.exports = { maximumDetonation };
