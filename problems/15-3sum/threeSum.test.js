const { threeSum } = require('./threeSum');

describe('threeSum', () => {
    it('should find three numbers', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
    });
});
