/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function (grid) {
    const N = grid.length;
    const directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0],
        [1, 1], [1, -1], [-1, 1], [-1, -1],
    ];

    const queue = [[0, 0, 1]]; // r, c, path
    const visited = new Set();
    while (queue.length) {
        const [r, c, path] = queue.shift();
        if (r < 0 || r >= N || c < 0 || c >= N
            || grid[r][c] || visited.has(JSON.stringify([r, c]))) {
            continue;
        }
        if (r === N - 1 && c === N - 1) {
            return path;
        }
        visited.add(JSON.stringify([r, c]));
        for (const [dr, dc] of directions) {
            queue.push([r + dr, c + dc, path + 1]);
        }
    }
    return -1;
};

module.exports = { shortestPathBinaryMatrix };
