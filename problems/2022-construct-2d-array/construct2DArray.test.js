const { construct2DArray } = require('./construct2DArray');

describe('construct2DArray', () => {
    it('constructs', () => {
        // expect(construct2DArray([1, 2, 3, 4], 2, 2)).toEqual([[1, 2], [3, 4]])
        expect(construct2DArray([1,2,3], 1, 3)).toEqual([[1, 2, 3]])
    });
});
