const { intersection } = require('./intersection');

describe('intersection', () => {
    it('finds intersection', () => {
        expect(intersection(
            [1, 2, 3, 2],
            [4, 1, 1],
        )).toEqual([1]);
    });
});
