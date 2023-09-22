const { numEnclaves } = require('./numEnclaves');

describe('numEnclaves', () => {
    it('finds number of enclaves', () => {
        const grid = [
            [0, 0, 0, 0],
            [1, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ];
        expect(numEnclaves(grid)).toBe(3);
    });
});
