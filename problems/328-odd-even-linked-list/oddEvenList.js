/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function (head) {
    if (head === null) {
        return null;
    }

    let odd = head;
    let even = head.next;
    const evenHead = even;

    while (even !== null && even.next !== null) {
        odd.next = odd.next.next;
        even.next = even.next.next;

        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};

module.exports = { oddEvenList };
