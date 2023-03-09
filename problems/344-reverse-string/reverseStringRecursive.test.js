const { reverseString } = require('./reverseStringRecursive');

describe('reverseStringRecursive', () => {
    it('reverses string recursively', () => {
        const str = ['m', 'a', 'x', 'i', 'm'];
        reverseString(str);
        expect(str).toEqual(['m', 'i', 'x', 'a', 'm']);
    });
});
