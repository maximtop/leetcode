const { insert } = require('./insert');

describe('insert', () => {
    it('works', () => {
        expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]]);
    });
});
