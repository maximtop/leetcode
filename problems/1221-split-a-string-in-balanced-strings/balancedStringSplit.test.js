const { balancedStringSplit } = require('./balancedStringSplit');

describe('balancedStringSplit', () => {
    it('counts possible splits', () => {
        expect(balancedStringSplit('RLRRLLRLRL')).toBe(4);
    });
});
