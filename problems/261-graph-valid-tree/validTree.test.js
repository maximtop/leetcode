const { validTree } = require('./validTree');

describe('validTree', () => {
    it('checks if graph is valid tree', () => {
        expect(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])).toBe(true);
    });
});
