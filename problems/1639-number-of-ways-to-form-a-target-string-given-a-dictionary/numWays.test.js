const { numWays } = require('./numWays');

describe('numWays', () => {
    it('counts number of ways to calculate', () => {
        expect(numWays(['acca', 'bbbb', 'caca'], 'aba')).toBe(6);
    });
});
