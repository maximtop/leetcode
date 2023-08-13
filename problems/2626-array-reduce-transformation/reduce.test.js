const { reduce } = require('./reduce');

describe('reduce', () => {
    it('works', () => {
        const arr = [1, 2, 3, 4, 5];
        const fn = (acc, el) => acc + el;
        expect(reduce(arr, fn, 0)).toBe(15);
    });
});
