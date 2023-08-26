const { timeLimit } = require('./timeLimit');

describe('timeLimit', () => {
    it('tests', async () => {
        const fn = () => {
            return new Promise((resolve) => {
                setTimeout(resolve, 100);
            });
        };
        const limited = timeLimit(fn, 50);
        await expect(limited()).rejects.toEqual('Time Limit Exceeded');
    });
});
