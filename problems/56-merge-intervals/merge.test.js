const { merge } = require('./merge');

describe('merge', () => {
    it('detects intervals', () => {
        expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
    });
});
