const { heightChecker } = require('./heightChecker');

describe('heightChecker', () => {
    it('checks', () => {
        expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3);
    });
});
