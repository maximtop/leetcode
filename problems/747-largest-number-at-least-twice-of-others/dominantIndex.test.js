const { dominantIndex } = require('./dominantIndex');

describe('dominantIndex', () => {
    it('finds dominant index', () => {
        expect(dominantIndex([3, 6, 1, 0])).toBe(1); // 6
        expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
    });
});
