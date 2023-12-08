const { maximalSquare } = require('./maximalSquare');

describe('maximalSquare', () => {
    it('finds maximal square', () => {
        expect(maximalSquare([
            ['1', '0', '1', '0', '0'],
            ['1', '0', '1', '1', '1'],
            ['1', '1', '1', '1', '1'],
            ['1', '0', '0', '1', '0'],
        ])).toBe(4);
        expect(maximalSquare([
            ['0', '1', '1'],
            ['1', '1', '1'],
        ])).toBe(4);
    });
});
