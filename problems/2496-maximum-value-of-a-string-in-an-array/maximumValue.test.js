const { maximumValue } = require('./maximumValue');

describe('maximumValue', () => {
    it('finds maximum value', () => {
        expect(maximumValue(['alic3', 'bob', '3', '4', '00000'])).toBe(5);
        expect(maximumValue(['3glko', '1'])).toBe(5);
        expect(maximumValue(['3glko', '1'])).toBe(5);
    });
});
