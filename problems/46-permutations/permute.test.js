const { permute } = require('./permute');

describe('permute', () => {
    it('builds permutations', () => {
        // expect(permute([1])).toEqual([[1]]);
        expect(permute([1, 2]).sort()).toEqual([[1, 2], [2, 1]].sort());
    });
});
