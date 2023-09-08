/**
 * @param {string[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {string} color
 * @return {boolean}
 */
const checkMove = function (board, rMove, cMove, color) {
    const directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0],
        [1, 1], [1, -1], [-1, 1], [-1, -1],
    ];
    const ROW = board.length;
    const COL = board[0].length;

    const legal = (row, col, direction) => {
        const [dr, dc] = direction;
        row += dr;
        col += dc;
        let length = 2;
        while (row >= 0 && row < ROW && col >= 0 && col < COL) {
            if (board[row][col] === '.') {
                return false;
            }
            if (board[row][col] === color) {
                return length >= 3;
            }
            row += dr;
            col += dc;
            length += 1;
        }
        return false;
    };

    for (const direction of directions) {
        if (legal(rMove, cMove, direction)) {
            return true;
        }
    }

    return false;
};

module.exports = { checkMove };
