/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
    const ROWS = board.length;
    const COLS = board[0].length;

    const dfs = (r, c) => {
        if (
            r < 0 || r >= ROWS
            || c < 0 || c >= COLS
            || board[r][c] === 'X'
            || board[r][c] === 'T'
        ) {
            return;
        }
        board[r][c] = 'T';
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (
                // consider values only on the edges
                (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1)
                && board[r][c] === 'O'
            ) {
                dfs(r, c);
            }
        }
    }

    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            }
            if (board[r][c] === 'T') {
                board[r][c] = 'O';
            }
        }
    }
};

module.exports = { solve };
