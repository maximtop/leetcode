const { fib } = require('./fib');

describe('fib', () => {
    it('calculates fib', () => {
        expect(fib(0)).toBe(0);
        expect(fib(1)).toBe(1);
        expect(fib(2)).toBe(1);
        expect(fib(3)).toBe(2);
    });
});
