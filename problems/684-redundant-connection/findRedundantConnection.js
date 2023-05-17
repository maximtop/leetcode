/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = function (edges) {
    const parent = [...Array(edges.length + 1)].map((_, i) => i);
    const rank = Array(edges.length + 1).fill(1);

    const find = (n) => {
        let p = parent[n];
        while (p !== parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    };

    const union = (n1, n2) => {
        const p1 = find(n1);
        const p2 = find(n2);

        if (p1 === p2) {
            return false;
        }

        if (rank[n1] > rank[n2]) {
            parent[p2] = parent[p1];
            rank[n1] += rank[n2];
        } else {
            parent[p1] = parent[p2];
            rank[n2] += rank[n1];
        }
        return true;
    };

    for (const [n1, n2] of edges) {
        if (!union(n1, n2)) {
            return [n1, n2];
        }
    }
};

module.exports = { findRedundantConnection };
