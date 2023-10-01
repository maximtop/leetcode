const { maxOperations } = require('./maxOperations');

describe('maxOperations', () => {
    it('founds max operations', () => {
        expect(maxOperations([1, 2, 3, 4], 5)).toBe(2);
        expect(maxOperations([3, 1, 3, 4, 3], 6)).toBe(1);
    });
});
