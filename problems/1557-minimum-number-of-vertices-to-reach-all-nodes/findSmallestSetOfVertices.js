/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findSmallestSetOfVertices = function (n, edges) {
    const incoming = {};
    for (const [src, dest] of edges) {
        (incoming[dest] ??= []).push(src);
    }
    const res = [];
    for (let i = 0; i < n; i += 1) {
        if (!incoming[i]) {
            res.push(i);
        }
    }
    return res;
};

module.exports = { findSmallestSetOfVertices };
