const { sortArray } = require('./sortArray');

describe('sortArray', () => {
    it('sorts array', () => {
        expect(sortArray([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
    });
});
