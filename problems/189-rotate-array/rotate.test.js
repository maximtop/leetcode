const { rotate, rotateExtra } = require('./rotate');

describe('rotate', () => {
    it('rotates array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        rotate(arr, 3);
        expect(arr).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });

    it('rotates array', () => {
        const arr = [2147483647, -2147483648, 33, 219, 0];
        rotate(arr, 4);
        expect(arr).toEqual([-2147483648,33,219,0,2147483647]);
    });
});

describe('rotate with extra array', () => {
    it('rotates array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        rotateExtra(arr, 3);
        expect(arr).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });
});
