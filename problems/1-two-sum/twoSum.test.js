const { twoSum } = require('./twoSum');

describe('twoSum', () => {
    it('finds', () => {
        expect(twoSum([1, 2, 4], 3)).toEqual([0, 1]);
        expect(twoSum([2,5,5,11], 10)).toEqual([1, 2]);
    });
});
