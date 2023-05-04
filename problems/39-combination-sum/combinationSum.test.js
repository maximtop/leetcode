const { combinationSum } = require('./combinationSum');

describe('combinationSum', () => {
    it('finds combination sums', () => {
        expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
    });
});
