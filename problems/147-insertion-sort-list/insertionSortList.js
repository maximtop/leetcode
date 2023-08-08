const { ListNode } = require('../helpers/linked-list/ListNode');
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
const insertionSortList = function (head) {
    const dummy = new ListNode();
    dummy.next = head;
    if (!head.next) {
        return head;
    }
    let prev = dummy.next;
    let curr = dummy.next.next;
    while (curr) {
        if (curr.val < prev.val) {
            let cyclePrev = dummy;
            let cycleCurr = dummy.next;
            while (cycleCurr) {
                if (curr.val < cycleCurr.val) {
                    const temp = curr.next;
                    cyclePrev.next = curr;
                    cyclePrev.next.next = cycleCurr;
                    prev.next = temp;
                    break;
                }
                cyclePrev = cycleCurr;
                cycleCurr = cycleCurr.next;
            }
        }
        prev = curr;
        curr = curr.next;
    }
    return dummy.next;
};

module.exports = { insertionSortList };
