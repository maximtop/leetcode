const { removeDuplicates } = require('./removeDuplicates');

describe('removeDuplicates', () => {
    it('removes duplicates', () => {
        const nums = [1, 1, 1, 2];
        expect(removeDuplicates(nums)).toBe(3);
        expect(nums.slice(0, 3)).toEqual([1, 1, 2]);
    });

    it('removes duplicates 2', () => {
        const nums = [1, 1, 1, 2, 2, 3];
        expect(removeDuplicates(nums)).toBe(5);
        expect(nums.slice(0, 5)).toEqual([1, 1, 2, 2, 3]);
    });
});
