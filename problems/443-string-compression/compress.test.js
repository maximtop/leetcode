const { compress } = require('./compress');

describe('compress', () => {
    it('compresses strings', () => {
        const arr = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
        expect(compress(arr)).toEqual(6);
        expect(arr.slice(0, 6)).toEqual(['a', '2', 'b', '2', 'c', '3']);
    });
});
