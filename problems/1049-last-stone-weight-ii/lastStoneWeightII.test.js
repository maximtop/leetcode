const { lastStoneWeightII } = require('./lastStoneWeightII');

describe('lastStoneWeight', () => {
    it('finds minimum possible weight', () => {
        expect(lastStoneWeightII([2, 7, 4, 1, 8, 1])).toBe(1);
    });
});
