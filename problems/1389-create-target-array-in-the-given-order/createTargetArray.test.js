const { createTargetArray } = require('./createTargetArray');

describe('createTargetArray', () => {
    it('creates target array', () => {
        const nums = [0, 1, 2, 3, 4];
        const index = [0, 1, 2, 2, 1];
        expect(createTargetArray(nums, index)).toEqual([0, 4, 1, 3, 2]);
    });
});
