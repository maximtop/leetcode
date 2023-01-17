const { minFlipsMonoIncr } = require('./minFlipsMonoIncr');

describe('minFlipsMonoIncr', () => {
    it('filps', () => {
        expect(minFlipsMonoIncr('00101')).toBe(1);
        expect(minFlipsMonoIncr('0101100011')).toBe(3);
        expect(minFlipsMonoIncr('10011111110010111011')).toBe(5);
    });
});
