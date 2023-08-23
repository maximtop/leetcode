const { numTrees } = require('./numTrees');

describe('numTrees', () => {
    it('counts number of binary search tree', () => {
        expect(numTrees(0)).toBe(1);
        expect(numTrees(1)).toBe(1);
        expect(numTrees(2)).toBe(2);
        expect(numTrees(3)).toBe(5);
    });
});
