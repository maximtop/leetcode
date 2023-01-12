const { isValid } = require('./isValid');

describe('is valid parenthesis', () => {
    it('works', () => {
        expect(isValid('()')).toBeTruthy();
        expect(isValid('())')).toBeFalsy();
    });
});
