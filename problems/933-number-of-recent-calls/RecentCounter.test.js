const { RecentCounter } = require('./RecentCounter');

describe('RecentCounter', () => {
    it('counts number of recent requests', () => {
        const recentCounter = new RecentCounter();
        expect(recentCounter.ping(1)).toBe(1);
        expect(recentCounter.ping(4)).toBe(2);
        expect(recentCounter.ping(3002)).toBe(2);
    });
});
