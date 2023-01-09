const { defangIPaddr } = require('./defangIPaddr');

describe('defangIPaddr', () => {
    it('works', () => {
        expect(defangIPaddr('1.1.1.1')).toBe('1[.]1[.]1[.]1');
    });
});
