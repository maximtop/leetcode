const { commonFactors } = require('./commonFactors');

describe('commonFactors', () => {
    it('works', () => {
        expect(commonFactors(12, 6)).toBe(4);
    });
});
