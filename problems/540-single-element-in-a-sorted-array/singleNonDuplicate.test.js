const { singleNonDuplicate } = require('./singleNonDuplicate');

describe('singleNonDuplicate', () => {
    it('returns single non duplicate', () => {
        expect(singleNonDuplicate([1, 1, 2, 3, 3])).toEqual(2);
        expect(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])).toEqual(2);
        expect(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])).toEqual(10);
    });
});
