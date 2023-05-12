const { solve } = require('./solve');

describe('solve', () => {
    it('should find surrounded regions', () => {
        const board = [['X', 'X', 'X', 'X'], ['X', 'O', 'O', 'X'], ['X', 'X', 'O', 'X'], ['X', 'O', 'X', 'X']];
        solve(board);
        expect(board).toEqual([['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'O', 'X', 'X']]);
    });

    it('should find surrounded region 1', () => {
        const board = [
            ['X', 'O', 'X', 'O', 'X', 'O'],
            ['O', 'X', 'O', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'O', 'X', 'O'],
            ['O', 'X', 'O', 'X', 'O', 'X'],
        ];
        solve(board);
        expect(board).toEqual([
            ['X', 'O', 'X', 'O', 'X', 'O'],
            ['O', 'X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X', 'O'],
            ['O', 'X', 'O', 'X', 'O', 'X'],
        ]);
    });
});
