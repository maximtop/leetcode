const { mySqrt } = require('./mySqrt');

describe('mySqrt', () => {
    it('return square root of number', () => {
        expect(mySqrt(4)).toBe(2);
        expect(mySqrt(8)).toBe(2);
    });
});
