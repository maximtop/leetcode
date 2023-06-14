const { reverseBits } = require('./reverseBits');

describe('reverseBits', () => {
    it('reverses 32 bit unsigned integer', () => {
        expect(reverseBits(0b00000010100101000001111010011100))
            .toEqual(0b00111001011110000010100101000000);
    });
});
