const { isBipartite } = require('./isBipartite');

describe('isBipartite', () => {
    it('finds if graph can be divided', () => {
        const graph = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]];
        expect(isBipartite(graph)).toBe(false);
        const graph2 = [[1, 3], [0, 2], [1, 3], [0, 2]];
        expect(isBipartite(graph2)).toBe(true);
    });
});
