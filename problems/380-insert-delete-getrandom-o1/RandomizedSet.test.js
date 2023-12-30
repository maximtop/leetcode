const { RandomizedSet } = require('./RandomizedSet');

describe('RandomizedSet', () => {
    it('works', () => {
        const set = new RandomizedSet();
        set.insert(1);
        expect(set.getRandom()).toEqual(1);
    });
    it('removes and inserts', () => {
        const set = new RandomizedSet();
        expect(set.remove(0)).toEqual(false);
        expect(set.remove(0)).toEqual(false);
        expect(set.insert(0)).toEqual(true);
        expect(set.getRandom()).toEqual(0);
        expect(set.remove(0)).toEqual(true);
        expect(set.insert(0)).toEqual(true);
    });
});
