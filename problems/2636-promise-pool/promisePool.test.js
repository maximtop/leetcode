const { promisePool } = require('./promisePool');

describe('promisePool', () => {
    it('uses promise pool', async () => {
        const sleep = (ms) => new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
        const start = Date.now();
        await promisePool([() => sleep(600), () => sleep(500)], 2);
        const end = Date.now();
        expect(end - start).toBeLessThan(650);
        expect(end - start).toBeGreaterThan(600);
    });

    it('passes test from leetcode', async () => {
        const start = Date.now();
        await promisePool([
            () => new Promise((res) => setTimeout(res, 300)),
            () => new Promise((res) => setTimeout(res, 400)),
            () => new Promise((res) => setTimeout(res, 200)),
        ], 2);
        const end = Date.now();
        expect(end - start).toBeLessThan(550);
        expect(end - start).toBeGreaterThan(500);
    });
});
