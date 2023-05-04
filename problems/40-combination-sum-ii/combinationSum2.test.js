const { combinationSum2 } = require('./combinationSum2');

describe('combinationSum2', () => {
    it('finds unique combunations', () => {
        expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8).sort()).toEqual([
            [1, 1, 6],
            [1, 2, 5],
            [1, 7],
            [2, 6],
        ].sort());
    });
});
