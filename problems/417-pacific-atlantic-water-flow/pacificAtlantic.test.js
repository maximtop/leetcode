const { pacificAtlantic } = require('./pacificAtlantic');

describe('pacificAtlantic', () => {
    it('detects cells from which watter flows to both oceans', () => {
        expect(pacificAtlantic([
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4],
        ])).toEqual([[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]);
    });
});
