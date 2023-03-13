const { getRow } = require('./getRow');

describe('getRow', () => {
    it('returns row by index', () => {
        expect(getRow(2)).toEqual([1, 2, 1]);
        expect(getRow(3)).toEqual([1, 3, 3, 1]);
    });
});
