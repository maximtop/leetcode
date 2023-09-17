const { isUgly } = require('./isUgly');

describe('isUgly', () => {
    it('checks if num is ugly', () => {
        expect(isUgly(6)).toBe(true);
    });
});
