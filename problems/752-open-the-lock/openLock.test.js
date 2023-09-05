const { openLock } = require('./openLock');

describe('openLock', () => {
    it('works', () => {
        const deadends = ['0201', '0101', '0102', '1212', '2002'];
        const target = '0202';
        expect(openLock(deadends, target)).toBe(6);
    });
});
