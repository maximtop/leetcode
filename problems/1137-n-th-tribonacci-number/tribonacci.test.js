const { tribonacci } = require('./tribonacci');

describe('tribonacci', () => {
    it('finds', () => {
        expect(tribonacci(4)).toBe(4);
        expect(tribonacci(5)).toBe(7);
        expect(tribonacci(25)).toBe(1389537);
    });
});
