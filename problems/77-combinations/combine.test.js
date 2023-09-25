const { combine } = require('./combine');

describe('combine', () => {
    it('builds combinations', () => {
        expect(combine(4, 2)).toEqual([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]);
    });
});
