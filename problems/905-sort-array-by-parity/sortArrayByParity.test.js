const { sortArrayByParity } = require('./sortArrayByParity');

describe('sortArrayByParity', () => {
    it('sorts', () => {
        const arr = [3, 1, 2, 4];
        sortArrayByParity(arr);
        expect(arr).toEqual([4, 2, 1, 3]);
    });
    it('sorts if all odd', () => {
        const arr = [1, 3];
        sortArrayByParity(arr);
        expect(arr).toEqual([1, 3]);
    });
});
