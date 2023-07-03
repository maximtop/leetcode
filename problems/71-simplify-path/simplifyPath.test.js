const { simplifyPath } = require('./simplifyPath');

describe('simplifyPath', () => {
    it('simplifies path', () => {
        expect(simplifyPath('/home/')).toBe('/home');
        expect(simplifyPath('/../')).toBe('/');
        expect(simplifyPath('/home//foo/')).toBe('/home/foo');
    });
});
