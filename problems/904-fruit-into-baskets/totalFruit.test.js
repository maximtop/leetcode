const { totalFruit } = require('./totalFruit');

describe('totalFruit', () => {
    it('works', () => {
        expect(totalFruit([1, 2, 1])).toBe(3);
        expect(totalFruit([0, 1, 2, 2])).toBe(3);
        expect(totalFruit([1, 2, 3, 2, 2])).toBe(4);
        expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toBe(5);
    });
});
