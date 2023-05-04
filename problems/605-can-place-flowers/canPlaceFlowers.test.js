const { canPlaceFlowers } = require('./canPlaceFlowers');

describe('canPlaceFlowers', () => {
    it('checks if flowers can be placed', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toEqual(true);
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toEqual(false);
        expect(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)).toEqual(true);
        expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toEqual(true);
    });
});
