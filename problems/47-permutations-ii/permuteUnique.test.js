const { permuteUnique } = require('./permuteUnique');

describe('permuteUnique', () => {
    it('works', () => {
        expect(permuteUnique([1, 1, 2])).toEqual([[1, 1, 2], [1, 2, 1], [2, 1, 1]]);
    });
});
