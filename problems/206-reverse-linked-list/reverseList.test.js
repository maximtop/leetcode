const { ListNode } = require('../helpers/linked-list/ListNode');
const { reverseList } = require('./reverseList');

describe('reverseList', () => {
    it('reverses list', () => {
        const linkedList = new ListNode(1, new ListNode(2, new ListNode(3, null)));
        expect(reverseList(linkedList))
            .toEqual(new ListNode(3, new ListNode(2, new ListNode(1, null))));
        expect(reverseList(new ListNode(1, null))).toEqual(new ListNode(1, null));
        expect(reverseList(new ListNode(1, new ListNode(2))))
            .toEqual(new ListNode(2, new ListNode(1, null)));
    });
});
