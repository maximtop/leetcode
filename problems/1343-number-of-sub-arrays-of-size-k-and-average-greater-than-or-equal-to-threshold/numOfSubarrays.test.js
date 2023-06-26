const { numOfSubarrays } = require('./numOfSubarrays');

describe('numOfSubarrays', () => {
    it('finds num of subarrays with average bigger or equal than threshold', () => {
        expect(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)).toBe(3);
        expect(numOfSubarrays([1, 1, 1, 1, 1], 1, 0)).toBe(5);
    });
});
