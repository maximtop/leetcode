const { sortColors } = require('./sortColors');

describe('sortColors', () => {
    it('sorts colors', () => {
        const arr = [0, 1, 2, 1, 0];
        sortColors(arr);
        expect(arr).toEqual([0, 0, 1, 1, 2]);
    });
});
