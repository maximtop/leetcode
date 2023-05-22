const { numDecodings } = require('./numDecodings');

describe('numDecodings', () => {
    it('calculates all possible ways to decode', () => {
        expect(numDecodings('12')).toBe(2);
    });
});
