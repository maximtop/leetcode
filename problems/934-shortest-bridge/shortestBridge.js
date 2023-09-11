/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestBridge = function (grid) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const ROW = grid.length;
    const COL = grid[0].length;

    const isInvalid = (r, c) => {
        return r < 0 || r >= ROW || c < 0 || c >= COL;
    };

    const visited = new Set();

    const dfs = (r, c) => {
        if (isInvalid(r, c) || !grid[r][c] || visited.has(JSON.stringify([r, c]))) {
            return;
        }
        visited.add(JSON.stringify([r, c]));
        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    };

    const bfs = () => {
        const queue = [...visited.values()];
        let res = 0;
        while (queue.length) {
            let l = queue.length;
            while (l > 0) {
                l -= 1;
                const [r, c] = JSON.parse(queue.shift());
                for (const [dr, dc] of directions) {
                    const newRow = r + dr;
                    const newCol = c + dc;
                    if (isInvalid(newRow, newCol) || visited.has(JSON.stringify([newRow, newCol]))) {
                        continue;
                    }
                    if (grid[newRow][newCol]) {
                        return res;
                    }
                    queue.push(JSON.stringify([newRow, newCol]));
                    visited.add(JSON.stringify([newRow, newCol]));
                }
            }
            res += 1;
        }
    };

    for (let r = 0; r < ROW; r += 1) {
        for (let c = 0; c < COL; c += 1) {
            if (grid[r][c]) {
                dfs(r, c);
                return bfs();
            }
        }
    }
};

module.exports = { shortestBridge };
