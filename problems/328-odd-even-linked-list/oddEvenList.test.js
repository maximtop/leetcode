const { oddEvenList } = require('./oddEvenList');
const { ListNode } = require('../helpers/linked-list/ListNode');

describe('oddEventList', () => {
    it('returns oddEventList', () => {
        expect(oddEvenList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))))
            .toEqual(new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(4)))));
    });
});
