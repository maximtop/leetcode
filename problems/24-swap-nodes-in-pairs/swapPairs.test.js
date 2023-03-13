const { ListNode } = require('../helpers/linked-list/ListNode');
const { swapPairs } = require('./swapPairs');

describe('swapPairs', () => {
    it('swaps pairs', () => {
        const linkedList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
        expect(swapPairs(linkedList))
            .toEqual(new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3)))));
    });

    it('swaps pairs for empty list', () => {
        const linkedList = null;
        expect(swapPairs(linkedList)).toEqual(null);
    });

    it('swaps pairs for linked list from one element', () => {
        const linkedList = new ListNode(1);
        expect(swapPairs(linkedList)).toEqual(new ListNode(1));
    });
});
