const { stoneGameII } = require('./stoneGameII');

describe('stoneGameII', () => {
    it('finds max points for alice', () => {
        expect(stoneGameII([2, 7, 9, 4, 4])).toBe(10);
    });
});
