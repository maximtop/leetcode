const { topKFrequent } = require('./topKFrequent');

describe('topKFrequent', () => {
    it('finds k top frequent', () => {
        const arr = [1, 1, 1, 2, 2, 3];
        expect(topKFrequent(arr, 2)).toEqual([1, 2]);
    });
});
