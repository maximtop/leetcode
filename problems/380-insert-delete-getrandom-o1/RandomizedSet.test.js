const { RandomizedSet } = require('./RandomizedSet');

describe('RandomizedSet', () => {
    it('works', () => {
        const set = new RandomizedSet();
        set.insert(1);
        expect(set.getRandom()).toEqual(1);
    });
});
