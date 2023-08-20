const { memoize } = require('./memoize');

describe('memoize', () => {
    it('executes once', () => {
        let counter = 0;
        const fn = (a, b) => {
            counter += 1;
            return a + b;
        };
        const memFn = memoize(fn);
        expect(memFn(1, 2)).toBe(3);
        expect(memFn(1, 2)).toBe(3);
        expect(counter).toBe(1);
    });
});
