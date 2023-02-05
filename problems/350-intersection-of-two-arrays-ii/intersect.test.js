const { intersect } = require('./intersect');

describe('intersect', () => {
    it('finds intersection of two arrays', () => {
        expect(intersect([1, 2, 3], [3, 4, 5])).toEqual([3]);
        expect(intersect([1, 2, 3], [4, 5])).toEqual([]);
        expect(intersect([1, 2, 3], [3, 4, 5, 3, 1]).sort()).toEqual([1, 3].sort());
        expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    });
});
