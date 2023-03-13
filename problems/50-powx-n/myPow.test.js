const { myPow } = require('./myPow');

describe('myPow', () => {
    it('calculates x raised to the power of n', () => {
        expect(myPow(2, 4)).toEqual(16);
        expect(myPow(2, -2)).toEqual(0.25);
        expect(myPow(-1, 2147483647)).toEqual(-1);
    });
});
