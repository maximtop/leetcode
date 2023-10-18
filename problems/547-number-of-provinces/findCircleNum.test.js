const { findCircleNum } = require('./findCircleNum');

describe('findCircleNum', () => {
    it('finds number of provinces', () => {
        expect(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toBe(2);
        expect(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).toBe(3);
    });
});
