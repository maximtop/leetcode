const { findDifferentBinaryString } = require('./findDifferentBinaryString');

describe('findDifferentBinaryString', () => {
    it('finds different binary string', () => {
        expect(findDifferentBinaryString(['01', '10'])).toBe('00');
    });
});
