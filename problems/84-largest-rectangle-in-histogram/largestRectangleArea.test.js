const { largestRectangleArea } = require('./largestRectangleArea');

describe('largestRectangleArea', () => {
    it('finds largest area', () => {
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
    });
});
