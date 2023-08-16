const { compose } = require('./compose');

describe('compose', () => {
    it('composes functions', () => {
        const fn = compose([(x) => x + 1, (x) => x * 2]);
        expect(fn(2)).toBe(5);
    });
});
