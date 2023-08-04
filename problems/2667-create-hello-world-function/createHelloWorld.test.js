const { createHelloWorld } = require('./createHelloWorld');

describe('createHelloWorld', () => {
    it('creates funcion', () => {
        const f = createHelloWorld();
        expect(f()).toBe('Hello World');
    });
});
