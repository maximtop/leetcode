const { maxArea } = require('./maxArea');

describe('maxArea', () => {
    it('should find max possible area', () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });
});
