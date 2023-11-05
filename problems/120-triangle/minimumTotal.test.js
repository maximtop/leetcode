const { minimumTotal } = require('./minimumTotal');

describe('minimumTotal', () => {
    it('finds minimum total', () => {
        expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
    });
});
