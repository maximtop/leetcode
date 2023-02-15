/* eslint-disable no-continue */
/**
 * @param {string[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    const { length } = board;
    const rows = {};
    const columns = {};
    const boxes = {};

    for (let r = 0; r < length; r += 1) {
        rows[r] = {};
        columns[r] = {};
        boxes[r] = {};
    }

    for (let r = 0; r < length; r += 1) {
        for (let c = 0; c < length; c += 1) {
            const cur = board[r][c];

            if (cur === '.') {
                continue;
            }

            if (rows[r][cur]) {
                return false;
            }
            rows[r][cur] = true;

            if (columns[c][cur]) {
                return false;
            }
            columns[c][cur] = true;

            const boxIdx = Math.floor((r / 3)) * 3 + Math.floor(c / 3);
            if (boxes[boxIdx][cur]) {
                return false;
            }
            boxes[boxIdx][cur] = { [cur]: true };
        }
    }
    return true;
};

module.exports = { isValidSudoku };
