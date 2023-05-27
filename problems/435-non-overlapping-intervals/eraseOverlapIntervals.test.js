const { eraseOverlapIntervals } = require('./eraseOverlapIntervals');

describe('eraseOverlapIntervals', () => {
    it('returns number of overlap intervals', () => {
        expect(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])).toBe(1);
    });
});
