const { rotate } = require('./rotate');

describe('rotate', () => {
    it('rotates matrix by 90 degrees', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        rotate(matrix);
        expect(matrix).toEqual([
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
        ]);
    });
});
