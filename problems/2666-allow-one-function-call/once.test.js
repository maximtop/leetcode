const { once } = require('./once');

describe('once', () => {
    it('executes once', () => {
        const fn = (a) => {
            return a * a;
        };
        const onceFn = once(fn);
        expect(onceFn(2)).toBe(4);
        expect(onceFn(2)).toBe(undefined);
    });
});
