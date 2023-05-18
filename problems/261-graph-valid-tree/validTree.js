/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const validTree = function (n, edges) {
    const adjList = {};

    for (let i = 0; i < n; i += 1) {
        adjList[i] = [];
    }

    for (const [n1, n2] of edges) {
        adjList[n1].push(n2);
        adjList[n2].push(n1);
    }

    const visited = new Set();
    const dfs = (n, prev) => {
        if (visited.has(n)) {
            return false;
        }
        visited.add(n);
        for (const child of adjList[n]) {
            if (child === prev) {
                continue;
            }
            if (!dfs(child, n)) {
                return false;
            }
        }
        return true;
    };

    return dfs(0, -1) && visited.size === n;
};

module.exports = { validTree };
