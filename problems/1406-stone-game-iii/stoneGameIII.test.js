const { stoneGameIII } = require('./stoneGameIII');

describe('stoneGameIII', () => {
    it('determines result of the game', () => {
        expect(stoneGameIII([1, 2, 3, 7])).toBe('Bob');
        expect(stoneGameIII([1, 2, 3, 6])).toBe('Tie');
    });
});
