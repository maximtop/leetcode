const { combinationSum3 } = require('./combinationSum3');

describe('combinationSum3', () => {
    it('finds combination sum', () => {
        expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]]);
    });
});
