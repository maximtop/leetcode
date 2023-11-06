const { deleteAndEarn } = require('./deleteAndEarn');

describe('deleteAndEarn', () => {
    it('finds how many point it is possible to earn', () => {
        expect(deleteAndEarn([3, 4, 2])).toBe(6);
    });
});
