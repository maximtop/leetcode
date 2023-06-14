const { getSum } = require('./getSum');

describe('getSum', () => {
    it('sums numbers without using + or -', () => {
        expect(getSum(2, 3)).toEqual(5);
    });
});
