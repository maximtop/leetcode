const { numIdenticalPairs } = require('./numIdenticalPairs');

describe('numIdenticalPairs', () => {
    it('counts good pairs', () => {
        expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
    });
});
