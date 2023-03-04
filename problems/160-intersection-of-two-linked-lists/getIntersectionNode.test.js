const { ListNode } = require('../helpers/linked-list/ListNode');
const { getIntersectionNode } = require('./getIntersectionNode');

describe('getIntersectionNode', () => {
    it('finds intersection', () => {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        const node3 = new ListNode(3);
        const node4 = new ListNode(4);
        const node11 = new ListNode(11);
        const node12 = new ListNode(12);

        const linkedList1 = node1;
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;

        const linkedList2 = node11;
        node11.next = node12;
        node12.next = node3;

        expect(getIntersectionNode(linkedList1, linkedList2)).toBe(node3);
    });
});
