const { shipWithinDays } = require('./shipWithinDays');

describe('shipWithinDays', () => {
    it('returns minimum ship capacity to ship packages in n days', () => {
        expect(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(15);
    });
});
