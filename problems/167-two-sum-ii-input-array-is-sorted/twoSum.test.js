const { twoSum } = require('./twoSum');

describe('twoSum', () => {
    it('finds two sum', () => {
        expect(twoSum([1, 2, 3, 4], 6)).toEqual([2, 4]);
    });
});
