const { mySqrt } = require('./mySqrtBinarySearch');

describe('mySqrt', () => {
    it('return square root of number', () => {
        expect(mySqrt(4)).toBe(2);
        expect(mySqrt(8)).toBe(2);
        expect(mySqrt(7)).toBe(2);
    });
});
