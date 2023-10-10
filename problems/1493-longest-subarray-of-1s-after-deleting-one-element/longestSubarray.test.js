const { longestSubarray } = require('./longestSubarray');

describe('longestSubarray', () => {
    it('counts how big can be longest subarray of ones if remove one zero', () => {
        expect(longestSubarray([0])).toBe(0);
        expect(longestSubarray([1])).toBe(0);
        expect(longestSubarray([1, 1])).toBe(1);
        expect(longestSubarray([1, 1, 0])).toBe(2);
        expect(longestSubarray([1, 1, 0, 1])).toBe(3);
        expect(longestSubarray([1, 1, 0, 0, 1])).toBe(2);
        expect(longestSubarray([1, 1, 1])).toBe(2);
    });
});
