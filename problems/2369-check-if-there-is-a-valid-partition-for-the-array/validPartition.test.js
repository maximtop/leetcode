const { validPartition } = require('./validPartition');

describe('validPartition', () => {
    it('finds if array can be partitioned', () => {
        expect(validPartition([4, 4, 4, 5, 6])).toBe(true);
        expect(validPartition([1, 1, 1, 2])).toBe(false);
    });
});
