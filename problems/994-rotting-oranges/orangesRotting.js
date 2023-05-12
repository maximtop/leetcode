/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    const queue = [];
    let fresh = 0;

    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] === 1) {
                fresh += 1;
            } else if (grid[r][c] === 2) {
                queue.push([r, c]);
            }
        }
    }

    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let time = 0;
    while (queue.length > 0 && fresh > 0) {
        const elToPop = queue.length;
        for (let i = 0; i < elToPop; i += 1) {
            const [r, c] = queue.shift();
            for (const [dr, dc] of DIRS) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || grid[nr][nc] !== 1) {
                    continue;
                }
                grid[nr][nc] = 2;
                fresh -= 1;
                queue.push([nr, nc]);
            }
        }
        time += 1;
    }

    if (fresh > 0) {
        return -1;
    }

    return time;
};

module.exports = { orangesRotting };
