const { containsNearbyDuplicate } = require('./containsNearbyDuplicate');

describe('containsNearbyDuplicate', () => {
    it('works', () => {
        expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBeTruthy();
        expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBeTruthy();
        expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBeFalsy();
    });
});
