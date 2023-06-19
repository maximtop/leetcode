const { leastBricks } = require('./leastBricks');

describe('leastBricks', () => {
    it('finds minimum cut bricks', () => {
        expect(leastBricks([[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]]))
            .toBe(2);
        expect(leastBricks([[1], [1], [1]])).toBe(3);
    });
});
