const { nearestExit } = require('./nearestExit');

describe('nearestExit', () => {
    it('finds distance to the nearest exit', () => {
        let maze = [
            ['+', '+', '.', '+'],
            ['.', '.', '.', '+'],
            ['+', '+', '+', '.'],
        ];
        let entrance = [1, 2];
        expect(nearestExit(maze, entrance)).toBe(1);

        maze = [
            ['+', '+', '+'],
            ['.', '.', '.'],
            ['+', '+', '+'],
        ];
        entrance = [1, 0];
        expect(nearestExit(maze, entrance)).toBe(2);
    });
});
