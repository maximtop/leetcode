const { minimumDifference } = require('./minimumDifference');

describe('minimumDifference', () => {
    it('finds min difference between k el', () => {
        expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2);
    });
});
