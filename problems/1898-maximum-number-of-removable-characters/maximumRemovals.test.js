const { maximumRemovals } = require('./maximumRemovals');

describe('maximumRemovals', () => {
    it('gets count of the maximum possible to remove numbers', () => {
        expect(maximumRemovals('abcacb', 'ab', [3, 1, 0])).toBe(2);
        expect(maximumRemovals('abcab', 'abc', [0, 1, 2, 3, 4])).toBe(0);
        expect(maximumRemovals('qlevcvgzfpryiqlwy', 'qlecfqlw', [12, 5])).toBe(2);
    });
});
