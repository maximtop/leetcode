const { isIsomorphic } = require('./isIsomorphic');

describe('isIsomorphic', () => {
    it('checks if string is isomorphic', () => {
        expect(isIsomorphic('egg', 'add')).toBe(true);
        expect(isIsomorphic('foo', 'bar')).toBe(false);
        expect(isIsomorphic('badc', 'baba')).toBe(false);
    });
});
