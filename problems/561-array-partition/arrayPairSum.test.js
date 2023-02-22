const { arrayPairSum } = require('./arrayPairSum');

describe('arrayPairSum', () => {
    it('gets sum', () => {
        expect(arrayPairSum([1, 4, 3, 2])).toBe(4);
    });
});
