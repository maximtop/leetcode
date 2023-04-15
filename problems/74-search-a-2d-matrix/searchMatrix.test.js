const { searchMatrix } = require('./searchMatrix');

describe('searchMatrix', () => {
    it('detects if element is in target', () => {
        const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
        const target = 3;
        expect(searchMatrix(matrix, target)).toBe(true);
    });
});
