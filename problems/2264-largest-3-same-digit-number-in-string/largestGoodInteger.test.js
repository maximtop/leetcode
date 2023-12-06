const { largestGoodInteger } = require('./largestGoodInteger');

describe('largestGoodInteger', () => {
    it('finds max 3 digit number', () => {
        expect(largestGoodInteger('6777133339')).toBe('777');
        expect(largestGoodInteger('2300019')).toBe('000');
    });
});
