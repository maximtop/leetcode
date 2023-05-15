const { canFinish } = require('./canFinish');

describe('canFinish', () => {
    it('detects if courses can be finished', () => {
        expect(canFinish(2, [[1, 0]])).toBe(true);
        expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
    });
});
