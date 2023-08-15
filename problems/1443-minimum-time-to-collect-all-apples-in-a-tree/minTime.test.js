const { minTime } = require('./minTime');

describe('minTime', () => {
    it('calculates min time to collect apples', () => {
        const n = 7;
        const edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]];
        const hasApple = [false, false, true, false, true, true, false];
        expect(minTime(n, edges, hasApple)).toBe(8);
    });

    it('passes the test', () => {
        const n = 4;
        const edges = [[0, 2], [0, 3], [1, 2]];
        const hasApple = [false, true, false, false];
        expect(minTime(n, edges, hasApple)).toBe(4);
    });
});
