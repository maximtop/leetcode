const { maxAlternatingSum } = require('./maxAlternatingSum');

describe('maxAlternatingSum', () => {
    it('finds max substring sum', () => {
        expect(maxAlternatingSum([4, 2, 5, 3])).toBe(7);
    });
});
