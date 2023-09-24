const { findSmallestSetOfVertices } = require('./findSmallestSetOfVertices');

describe('findSmallestSetOfVertices', () => {
    it('finds smallest set of vertices', () => {
        const n = 6;
        const edges = [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]];
        expect(findSmallestSetOfVertices(n, edges)).toEqual([0, 3]);
    });
});
