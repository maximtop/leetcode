const { ArrayWrapper } = require('./ArrayWrapper');

describe('ArrayWrapper', () => {
    it('can sum and stringify', () => {
        const obj1 = new ArrayWrapper([1, 2]);
        const obj2 = new ArrayWrapper([3, 4]);
        expect(String(obj1)).toBe('[1,2]');
        expect(obj1 + obj2).toBe(10);
    });
});
