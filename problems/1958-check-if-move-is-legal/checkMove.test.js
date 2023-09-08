const { checkMove } = require('./checkMove');

describe('checkMove', () => {
    it('checks if move is legal', () => {
        const board = [
            ['.', '.', '.', 'B', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', '.', '.', '.', '.'],
            ['W', 'B', 'B', '.', 'W', 'W', 'W', 'B'],
            ['.', '.', '.', 'B', '.', '.', '.', '.'],
            ['.', '.', '.', 'B', '.', '.', '.', '.'],
            ['.', '.', '.', 'W', '.', '.', '.', '.'],
        ];
        const rMove = 4;
        const cMove = 3;
        const color = 'B';

        expect(checkMove(board, rMove, cMove, color)).toBe(true);
    });
});
