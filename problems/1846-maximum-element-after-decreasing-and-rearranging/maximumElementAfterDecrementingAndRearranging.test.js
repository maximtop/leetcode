const { maximumElementAfterDecrementingAndRearranging } = require('./maximumElementAfterDecrementingAndRearranging');

describe('maximumElementAfterDecrementingAndRearranging', () => {
    it('finds maximum element', () => {
        expect(maximumElementAfterDecrementingAndRearranging([2, 2, 1, 2, 1])).toBe(2);
        expect(maximumElementAfterDecrementingAndRearranging([100, 1, 1000])).toBe(3);
        expect(maximumElementAfterDecrementingAndRearranging([73, 98, 9])).toBe(3);
    });
});
