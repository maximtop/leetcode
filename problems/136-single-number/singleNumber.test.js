const { singleNumber } = require('./singleNumber');

describe('singleNumber', () => {
    it('works', () => {
        expect(singleNumber([1, 2, 2])).toBe(1)
    });
});
