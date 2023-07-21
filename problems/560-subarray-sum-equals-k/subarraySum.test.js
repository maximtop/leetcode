const { subarraySum } = require('./subarraySum');

describe('subarraySum', () => {
    it('works', () => {
        expect(subarraySum([1, -1, 1, 1, 1, 1], 3)).toBe(4);
    });
});
