const { ListNode } = require('../helpers/linked-list/ListNode');
const { deleteMiddle } = require('./deleteMiddle');

describe('deleteMiddle', () => {
    it('removes middle from the linked list', () => {
        expect(deleteMiddle(null)).toEqual(null);
        expect(deleteMiddle(new ListNode(1))).toEqual(null);
        expect(deleteMiddle(new ListNode(1, new ListNode(2)))).toEqual(new ListNode(1));
        expect(deleteMiddle(new ListNode(1, new ListNode(2, new ListNode(3)))))
            .toEqual(new ListNode(1, new ListNode(3)));
        expect(deleteMiddle(new ListNode(1, new ListNode(2, new ListNode(3)))))
            .toEqual(new ListNode(1, new ListNode(3)));
        expect(deleteMiddle(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))))
            .toEqual(new ListNode(1, new ListNode(2, new ListNode(4, new ListNode(5)))));
    });
});
