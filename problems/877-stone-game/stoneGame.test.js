const { stoneGame } = require('./stoneGame');

describe('stoneGame', () => {
    it('determines winner', () => {
        expect(stoneGame([5, 3, 4, 5])).toBe(true);
    });
});
