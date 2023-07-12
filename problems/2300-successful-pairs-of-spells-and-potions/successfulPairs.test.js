const { successfulPairs } = require('./successfulPairs');

describe('successfulPairs', () => {
    it('finds successfulPairs', () => {
        expect(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)).toEqual([4, 0, 3]);
    });
});
