/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = function (n, connections) {
    const neighbors = {};
    for (let i = 0; i < n; i += 1) {
        neighbors[i] = [];
    }
    for (let i = 0; i < connections.length; i += 1) {
        const [c1, c2] = connections[i];
        neighbors[c1].push(c2);
        neighbors[c2].push(c1);
    }
    const edges = new Set();
    for (let i = 0; i < connections.length; i += 1) {
        edges.add(JSON.stringify(connections[i]));
    }
    const visited = new Set();
    let changes = 0;
    const dfs = (city) => {
        for (const neighbor of neighbors[city]) {
            if (visited.has(neighbor)) {
                continue;
            }
            if (!edges.has(JSON.stringify([neighbor, city]))) {
                changes += 1;
            }
            visited.add(neighbor);
            dfs(neighbor);
        }
    };
    visited.add(0);
    dfs(0);
    return changes;
};

module.exports = { minReorder };
