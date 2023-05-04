/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    const ROWS = board.length;
    const COLS = board[0].length;
    const path = new Set();

    function getKey(r, c) {
        return `${r},${c}`;
    }

    const dfs = (r, c, i) => {
        if (i === word.length) {
            return true;
        }

        if (
            r < 0
            || c < 0
            || r >= ROWS
            || c >= COLS
            || board[r][c] !== word[i]
            || path.has(getKey(r, c))
        ) {
            return false;
        }

        path.add(getKey(r, c));
        const res = dfs(r + 1, c, i + 1)
            || dfs(r - 1, c, i + 1)
            || dfs(r, c + 1, i + 1)
            || dfs(r, c - 1, i + 1);

        path.delete(getKey(r, c));
        return res;
    };

    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (dfs(r, c, 0)) {
                return true;
            }
        }
    }

    return false;
};

module.exports = { exist };
