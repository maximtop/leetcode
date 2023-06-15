const { reverse } = require('./reverse');

describe('reverse', () => {
    it('reverses integers', () => {
        expect(reverse(123)).toBe(321);
    });
    it('reverses negative integers', () => {
        expect(reverse(-123)).toBe(-321);
    });
    it('if reversed is bigger than signed integer, returns 0', () => {
        expect(reverse(-1563847412)).toBe(0);
    });
});
