const { removeElement, removeIdx } = require('./removeElement');

describe('removeElement', () => {
    it('removes', () => {
        const arr = [1, 2, 3];
        expect(removeElement(arr, 2)).toEqual(2);
        expect(arr.slice(0, 2)).toEqual([1, 3]);
        expect(arr).toEqual([1, 3, 3]);
    });

    it('removes as expected', () => {
        const arr = [0, 1, 2, 2, 3, 0, 4, 2];
        expect(removeElement(arr, 2)).toEqual(5);
        expect(arr.slice(0, 5)).toEqual([0, 1, 3, 0, 4]);
    });
});

describe('removeIdx', () => {
    it('removes element by index', () => {
        expect(removeIdx([1, 2, 3], 1)).toEqual([1, 3, 3]);
    });
});
