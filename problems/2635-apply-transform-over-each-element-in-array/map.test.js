const { map } = require('./map');

describe('map', () => {
    it('mimics map', () => {
        expect(map([1, 2, 3], (el, i) => el + i)).toEqual([1, 3, 5]);
    });
});
