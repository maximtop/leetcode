const { TimeMap } = require('./TimeMap');

describe('TimeMap', () => {
    it('works', () => {
        // ["TimeMap","set","set","get","get","get","get","get"]
        // [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
        const timeMap = new TimeMap();
        timeMap.set('love', 'high', 10);
        timeMap.set('love', 'low', 20);
        expect(timeMap.get('love', 5)).toBe('');
    });
});
