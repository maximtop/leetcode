const { findRedundantConnection } = require('./findRedundantConnection');

describe('findRedundantConnection', () => {
    it('finds redundant connection', () => {
        expect(findRedundantConnection([[1, 2], [1, 3], [2, 3]])).toEqual([2, 3]);
    });
});
