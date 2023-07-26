const { wiggleSort } = require('./wiggleSort');

describe('wiggleSort', () => {
    it('sorts arr in required order', () => {
        const nums = [3, 5, 2, 1, 6, 4];
        wiggleSort(nums);
        expect(nums).toEqual([3, 5, 1, 6, 2, 4]);
    });
});
