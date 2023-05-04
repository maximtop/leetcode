const { subsetsWithDup } = require('./subsetsWithDup');

describe('subsetsWithDup', () => {
    it('finds all subsets without duplicates', () => {
        expect(subsetsWithDup([1, 2, 2]).sort()).toEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]].sort());
    });
});
