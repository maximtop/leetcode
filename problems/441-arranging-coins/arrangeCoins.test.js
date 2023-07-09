const { arrangeCoins } = require('./arrangeCoins');

describe('arrangeCoins', () => {
    it('finds how many rows can be built with n coins', () => {
        expect(arrangeCoins(5)).toEqual(2);
    });
});
