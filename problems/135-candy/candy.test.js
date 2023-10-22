const { candy } = require('./candy');

describe('candy', () => {
    it('determines how many candies for every child', () => {
        expect(candy([1, 0, 2])).toBe(5);
    });
});
