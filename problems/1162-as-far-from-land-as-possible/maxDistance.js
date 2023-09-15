/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxDistance = function (grid) {
    const size = grid.length;
    const queue = [];
    for (let r = 0; r < size; r += 1) {
        for (let c = 0; c < size; c += 1) {
            if (grid[r][c]) {
                queue.push([r, c]);
            }
        }
    }

    const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    let res = -1;
    while (queue.length) {
        const [r, c] = queue.shift();
        for (const [dr, dc] of directions) {
            const nr = dr + r;
            const nc = dc + c;
            if (Math.min(nc, nr) >= 0 && Math.max(nc, nr) < size && !grid[nr][nc]) {
                queue.push([nr, nc]);
                grid[nr][nc] = grid[r][c] + 1;
            }
        }
        res = grid[r][c];
    }

    if (res > 1) {
        return res - 1;
    }

    return -1;
};

module.exports = { maxDistance };
