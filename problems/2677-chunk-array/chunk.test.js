const { chunk } = require('./chunk');

describe('chunk', () => {
    it('works', () => {
        expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
        expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
    });
});
