const { numIslands } = require('./numIslands');

describe('numIslands', () => {
    it('finds number of islands', () => {
        const grid = [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
        ];

        expect(numIslands(grid)).toEqual(1);
    });
});
