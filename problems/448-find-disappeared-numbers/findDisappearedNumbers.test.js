const { findDisappearedNumbers } = require('./findDisappearedNumbers');

describe('findDisappearedNumbers', () => {
    it('finds', () => {
        expect(findDisappearedNumbers([1, 1])).toEqual([2])
    });
});
