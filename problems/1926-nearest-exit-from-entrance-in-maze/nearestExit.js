/**
 * @param {string[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = function (maze, entrance) {
    const ROWS = maze.length;
    const COLS = maze[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const queue = [];
    queue.push([...entrance, 0]);
    const [er, ec] = entrance;
    maze[er][ec] = '+';

    while (queue.length > 0) {
        const [r, c, l] = queue.shift();
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= ROWS || nr < 0 || nc >= COLS || nc < 0) {
                if (JSON.stringify([r, c]) !== JSON.stringify(entrance)) {
                    return l;
                }
            } else if (maze[nr][nc] !== '+') {
                maze[nr][nc] = '+';
                queue.push([nr, nc, l + 1]);
            }
        }
    }

    return -1;
};

module.exports = { nearestExit };
