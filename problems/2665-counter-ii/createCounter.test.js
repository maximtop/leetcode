const { createCounter } = require('./createCounter');

describe('createCounter', () => {
    it('creates counter', () => {
        const counter = createCounter(5);
        expect(counter.increment()).toBe(6);
        expect(counter.decrement()).toBe(5);
        expect(counter.decrement()).toBe(4);
        expect(counter.reset()).toBe(5);
    });
});
