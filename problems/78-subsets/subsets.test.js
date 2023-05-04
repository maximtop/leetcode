const { subsets } = require('./subsets');

describe('subset', () => {
    it('builds subsets', () => {
        expect(subsets([1]).sort()).toEqual([[], [1]].sort());
        expect(subsets([1, 2]).sort()).toEqual([[], [1], [2], [1, 2]].sort());
    });
});
