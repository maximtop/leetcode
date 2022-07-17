const { containsDuplicate } = require('./containsDuplicate.js');

describe('containsDuplicate', () => {
    it('checks for duplicates', () => {
        expect(containsDuplicate([1, 2])).toBeFalsy();
        expect(containsDuplicate([1, 2, 1])).toBeTruthy();
        expect(containsDuplicate([])).toBeFalsy();
    });
});
