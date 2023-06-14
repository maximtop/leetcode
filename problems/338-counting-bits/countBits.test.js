const { countBits } = require('./countBits');

describe('countBits', () => {
    it('counts bits', () => {
        expect(countBits(2)).toEqual([0, 1, 1]);
    });
});
