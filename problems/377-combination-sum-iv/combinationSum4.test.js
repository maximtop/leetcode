const { combinationSum4 } = require('./combinationSum4');

describe('combinationSum4', () => {
    it('counts all possible combinations', () => {
        expect(combinationSum4([1, 2, 3], 4)).toBe(7);
    });
});
