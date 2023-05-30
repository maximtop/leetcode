const { isNStraightHand } = require('./isNStraightHand');

describe('isNStraightHand', () => {
    it('detects if possible to arrange cards', () => {
        expect(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)).toBe(true);
        expect(isNStraightHand([1], 1)).toBe(true);
    });
});
