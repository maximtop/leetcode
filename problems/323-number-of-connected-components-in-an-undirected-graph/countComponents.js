/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countComponents = function (n, edges) {
    const parent = [...Array(n)].map((_, i) => i);
    const rank = Array(n).fill(1);

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
        if (rank[p1] >= rank[p2]) {
            rank[p1] += rank[p2];
            parent[p2] = parent[p1];
        } else {
            rank[p2] += rank[p1];
            parent[p1] = parent[p2];
        }
        return true;
    };

    let count = n;
    for (const [n1, n2] of edges) {
        if (union(n1, n2)) {
            count -= 1;
        }
    }

    return count;
};

module.exports = { countComponents };
