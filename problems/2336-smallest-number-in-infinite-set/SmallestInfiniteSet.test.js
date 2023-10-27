const { SmallestInfiniteSet } = require('./SmallestInfiniteSet');

describe('SmallestInfiniteSet', () => {
    it('works', () => {
        const sis = new SmallestInfiniteSet();
        sis.addBack(2);
        expect(sis.popSmallest()).toBe(1);
        expect(sis.popSmallest()).toBe(2);
        expect(sis.popSmallest()).toBe(3);
        sis.addBack(1);
        expect(sis.popSmallest()).toBe(1);
        expect(sis.popSmallest()).toBe(4);
    });
});
