const { exist } = require('./exist');

describe('exist', () => {
    it('detects if word can be built in the matrix', () => {
        const matrix = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        expect(exist(matrix, 'ABCCED')).toBeTruthy();
    });
});
