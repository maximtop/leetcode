/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
const shortestAlternatingPaths = function (n, redEdges, blueEdges) {
    const red = {};
    const blue = {};
    for (const [src, dest] of redEdges) {
        (red[src] ??= []).push(dest);
    }
    for (const [src, dest] of blueEdges) {
        (blue[src] ??= []).push(dest);
    }
    const visited = new Set();
    visited.add(JSON.stringify([0, null]));
    const answer = Array(n).fill(-1);
    answer[0] = 0;
    const queue = [];
    queue.push([0, 0, null]); // node, length, edgeColor
    while (queue.length) {
        const [node, length, edgeColor] = queue.shift();
        if (answer[node] === -1) {
            answer[node] = length;
        }
        if (edgeColor !== 'RED') {
            for (const nei of (red[node] ??= [])) {
                if (!visited.has(JSON.stringify([nei, 'RED']))) {
                    visited.add(JSON.stringify([nei, 'RED']));
                    queue.push([nei, length + 1, 'RED']);
                }
            }
        }
        if (edgeColor !== 'BLUE') {
            for (const nei of (blue[node] ??= [])) {
                if (!visited.has(JSON.stringify([nei, 'BLUE']))) {
                    visited.add(JSON.stringify([nei, 'BLUE']));
                    queue.push([nei, length + 1, 'BLUE']);
                }
            }
        }
    }
    return answer;
};

module.exports = { shortestAlternatingPaths };
