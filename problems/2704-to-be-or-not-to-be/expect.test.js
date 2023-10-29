const { expect: expect2 } = require('./expect');

describe('expect', () => {
    it('works', () => {
        expect(expect2(2).toBe(2)).toBe(true);
        expect(expect2(2).notToBe(3)).toBe(true);
        expect(() => expect2(2).notToBe(2)).toThrow('Equal');
    });
});
