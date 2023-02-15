const { pivotIndex } = require('./pivotIndex');

describe('pivotIndex', () => {
    it('returns pivot index', () => {
        expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3); // arr[3] === 6;
    });
});
