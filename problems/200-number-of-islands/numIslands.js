/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
    if (grid.length === 0) {
        return 0;
    }

    const ROWS = grid.length;
    const COLS = grid[0].length;
    let islands = 0;
    const visited = new Set();

    const getKey = (r, c) => {
        return `${r}:${c}`;
    };

    const bfs = (r, c) => {
        const queue = [];
        queue.push([r, c]);

        while (queue.length > 0) {
            const [r, c] = queue.shift();
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            for (const [dr, dc] of directions) {
                const newR = r + dr;
                const newC = c + dc;
                if (newR >= 0 && newR < ROWS
                    && newC >= 0 && newC < COLS
                    && !visited.has(getKey(newR, newC))
                    && grid[newR][newC] === '1') {
                    visited.add(getKey(newR, newC));
                    queue.push([newR, newC]);
                }
            }
        }
    };

    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] === '1' && !visited.has(getKey(r, c))) {
                visited.add(getKey(r, c));
                bfs(r, c);
                islands += 1;
            }
        }
    }

    return islands;
};

module.exports = { numIslands };
