const { findPeakElement } = require('./findPeakElement');

describe('findPeakElement', () => {
    it('finds peak element', () => {
        expect(findPeakElement([1, 2, 3, 1])).toEqual(2);
        expect([1, 5]).toContain(findPeakElement([1, 2, 1, 3, 4, 5, 2]));
    });
});
