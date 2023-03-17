const { search } = require('./search');

describe('search', () => {
    it('finds target index', () => {
        const arr = [1, 2, 3, 6, 9, 31];
        expect(search(arr, 9)).toEqual(4);
        expect(search(arr, 10)).toEqual(-1);
    });
});
