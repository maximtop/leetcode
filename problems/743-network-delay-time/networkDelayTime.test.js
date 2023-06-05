const { networkDelayTime } = require('./networkDelayTime');

describe('networkDelayTime', () => {
    it('finds delay time', () => {
        const times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]];
        const n = 4;
        const k = 2;
        expect(networkDelayTime(times, n, k)).toBe(2);
    });
});
