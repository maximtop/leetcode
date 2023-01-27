const { calculateTime } = require('./calculateTime');

describe('calculateTime', () => {
    it('works', () => {
        expect(calculateTime('pqrstuvwxyzabcdefghijklmno', 'leetcode')).toBe(73);
    });
});
