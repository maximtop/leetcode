const { thirdMax } = require('./thirdMax');

describe('thirdMax', () => {
    it('finds third max', () => {
        expect(thirdMax([1, 2, 3])).toBe(1);
        expect(thirdMax([1, 2])).toBe(2);
        expect(thirdMax([2, 2, 3, 1])).toBe(1);
    });
});
