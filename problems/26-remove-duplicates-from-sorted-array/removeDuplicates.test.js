const { removeDuplicates } = require('./removeDuplicates');

describe('removeDuplicates', () => {
    it('works', () => {
        const arr = [0, 1, 1, 2, 3, 3];
        const resultLength = removeDuplicates(arr);
        expect(resultLength).toBe(4);
        expect(arr.slice(0, resultLength)).toEqual([0, 1, 2, 3]);
    });
});
