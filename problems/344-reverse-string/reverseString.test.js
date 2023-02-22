const { reverseString } = require('./reverseString');

describe('reverseString', () => {
    it('reverses string', () => {
        expect(reverseString(['m', 'a', 'x'])).toEqual(['x', 'a', 'm']);
    });
});
