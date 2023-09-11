const { convertToTitle } = require('./convertToTitle');

describe('convertToTitle', () => {
    it('converts to title', () => {
        expect(convertToTitle(1)).toBe('A');
        expect(convertToTitle(28)).toBe('AB');
    });
});
