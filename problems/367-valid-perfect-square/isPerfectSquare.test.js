const { mySqrt, isPerfectSquare } = require('./isPerfectSquare');

describe('isPerfectSquare', () => {
    it('checks if number is perfect square', () => {
        expect(isPerfectSquare(16)).toBe(true);
        expect(isPerfectSquare(17)).toBe(false);
    });
});

describe('mySqrt', () => {
    it('finds sqrt', () => {
        expect(mySqrt(4)).toBe(2);
        expect(mySqrt(8)).toBe(2);
        expect(mySqrt(7)).toBe(2);
    });
});
