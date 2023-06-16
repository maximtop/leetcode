const { arraySign } = require('./arraySign');

describe('arraySign', () => {
    it('finds array sign', () => {
        expect(arraySign([-1, -2, -1])).toBe(-1);
        expect(arraySign([-5])).toBe(-1);
    });
});
