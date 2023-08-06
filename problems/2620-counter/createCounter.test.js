const { createCounter } = require('./createCounter');

describe('createCounter', () => {
    it('creates counter', () => {
        const counter = createCounter(10);
        expect(counter()).toBe(10);
        expect(counter()).toBe(11);
        expect(counter()).toBe(12);
    });
});
