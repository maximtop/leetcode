const { minSubArrayLen } = require('./minSubArrayLen');

describe('minSubArrayLen', () => {
    it('returns min length of sub array', () => {
        expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
    });
});
