const { closeStrings } = require('./closeStrings');

describe('closeStrings', () => {
    it('detects if strings are close', () => {
        expect(closeStrings('abc', 'bca')).toBeTruthy();
        expect(closeStrings('a', 'aa')).toBeFalsy();
    });
});
