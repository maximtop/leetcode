/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function (equations, values, queries) {
    const adj = {};
    for (let i = 0; i < equations.length; i += 1) {
        const [a, b] = equations[i];
        (adj[a] ??= []).push([b, values[i]]);
        (adj[b] ??= []).push([a, 1 / values[i]]);
    }

    const bfs = (src, target) => {
        if (!(src in adj) || !(target in adj)) {
            return -1;
        }

        const visited = new Set();
        const queue = [[src, 1]];
        visited.add(src);
        while (queue.length) {
            const [n, w] = queue.shift();
            if (n === target) {
                return w;
            }
            for (const [nei, weight] of (adj[n] || [])) {
                if (!(visited.has(nei))) {
                    queue.push([nei, w * weight]);
                    visited.add(nei);
                }
            }
        }
        return -1;
    };

    return queries.map(([a, b]) => bfs(a, b));
};

module.exports = { calcEquation };
