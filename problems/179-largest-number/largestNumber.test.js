const { largestNumber } = require('./largestNumber');

describe('largestNumber', () => {
    it('combines numbers to the largest number', () => {
        expect(largestNumber([10, 2])).toBe('210');
        expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330');
        expect(largestNumber([0, 0])).toBe('0');
    });
});
