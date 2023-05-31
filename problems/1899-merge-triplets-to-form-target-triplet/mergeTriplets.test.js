const { mergeTriplets } = require('./mergeTriplets');

describe('mergeTriplets', () => {
    it('detects if triplets could be merged in the target', () => {
        expect(mergeTriplets([[2, 5, 3], [1, 8, 4], [1, 7, 5]], [2, 7, 5])).toBe(true);
    });
});
