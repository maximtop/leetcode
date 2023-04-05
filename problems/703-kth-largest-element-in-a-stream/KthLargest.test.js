const { KthLargest } = require('./KthLargest');

describe('KthLargest', () => {
    it('returns kth largest node from the stream', () => {
        const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
        expect(kthLargest.add(3)).toEqual(4);
        expect(kthLargest.add(5)).toEqual(5);
        expect(kthLargest.add(10)).toEqual(5);
    });
    it('returns kth largest node from the stream with negative numbers', () => {
        // ["KthLargest","add","add","add","add","add"]
        // [[1,[]],[-3],[-2],[-4],[0],[4]]
        const kthLargest = new KthLargest(1, []);
        expect(kthLargest.add(-3)).toEqual(-3);
        expect(kthLargest.add(-2)).toEqual(-2);
    });
});
