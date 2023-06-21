const { numRescueBoats } = require('./numRescueBoats');

describe('numRescueBoat', () => {
    it('finds min number of boats', () => {
        expect(numRescueBoats([1, 2], 3)).toBe(1);
        expect(numRescueBoats([3, 2, 2, 1], 3)).toBe(3);
        expect(numRescueBoats([3, 5, 3, 4], 5)).toBe(4);
        expect(numRescueBoats([5, 1, 4, 2], 6)).toBe(2);
        // each boat caries only two at most
        expect(numRescueBoats([3, 2, 3, 2, 2], 6)).toBe(3);
    });
});
