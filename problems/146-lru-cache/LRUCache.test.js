const { LRUCache } = require('./LRUCache');

describe('LRUCache', () => {
    it('works', () => {
        const lruCache = new LRUCache(2);
        lruCache.put(1, 1);
        lruCache.put(2, 2);
        expect(lruCache.get(1)).toEqual(1);
        lruCache.put(3, 3);
        expect(lruCache.get(2)).toBe(-1);
        lruCache.put(4, 4);
        expect(lruCache.get(1)).toBe(-1);
        expect(lruCache.get(3)).toBe(3);
        expect(lruCache.get(4)).toBe(4);
    });
    it('passes leetcode tests', () => {
        const lruCache = new LRUCache(2);
        expect(lruCache.get(2)).toBe(-1);
        lruCache.put(2, 6);
        expect(lruCache.get(1)).toBe(-1);
        lruCache.put(1, 5);
        lruCache.put(1, 2);
        expect(lruCache.get(1)).toBe(2);
        expect(lruCache.get(2)).toBe(6);
    });
});
