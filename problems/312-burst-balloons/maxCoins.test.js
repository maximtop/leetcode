const { maxCoins } = require('./maxCoins');

describe('maxCoins', () => {
    it('finds max coins', () => {
        expect(maxCoins([3, 1, 5, 8])).toBe(167);
    });
});
