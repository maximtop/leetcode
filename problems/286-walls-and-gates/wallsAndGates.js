/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const wallsAndGates = function (rooms) {
    const EMPTY = (2 ** 31) - 1;
    const GATE = 0;
    const DIRECTIONS = {
        right: [0, 1],
        left: [0, -1],
        up: [-1, 0],
        down: [1, 0],
    };

    const rows = rooms.length;
    if (rows === 0) {
        return;
    }

    const cols = rooms[0].length;
    const queue = [];

    for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
            if (rooms[row][col] === GATE) {
                queue.push({ row, col });
            }
        }
    }

    while (queue.length > 0) {
        const { row, col } = queue.shift();
        for (const direction of Object.values(DIRECTIONS)) {
            const newRow = row + direction[0];
            const newCol = col + direction[1];
            if (newRow < 0
                || newCol < 0
                || newRow >= rows
                || newCol >= cols
                || rooms[newRow][newCol] !== EMPTY) {
                // eslint-disable-next-line no-continue
                continue;
            }
            rooms[newRow][newCol] = rooms[row][col] + 1;
            queue.push({ row: newRow, col: newCol });
        }
    }
};

module.exports = { wallsAndGates };
