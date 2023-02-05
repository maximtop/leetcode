const { smallerNumbersThanCurrent } = require('./smallerNumbersThanCurrent');

describe('smallerNumbersThanCurrent', () => {
    it('finds smaller numbers than current', () => {
        expect(smallerNumbersThanCurrent([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3]);
    });
});
