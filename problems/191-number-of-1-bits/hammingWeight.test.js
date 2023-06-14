const { hammingWeight } = require('./hammingWeight');

describe('hammingWeight', () => {
    it('counts number of the ones in the binary number', () => {
        expect(hammingWeight(0b0000000000000000000000000001011)).toBe(3);
        expect(hammingWeight(0b11111111111111111111111111111101)).toBe(31);
    });
});
