const { addBinary } = require('./addBinary');

describe('addBinary', () => {
    it('adds', () => {
        expect(addBinary('1', '0')).toBe('1');
        expect(addBinary('1', '1')).toBe('10');
        expect(addBinary('10', '1')).toBe('11');
        expect(addBinary('1', '10')).toBe('11');
    });
});
