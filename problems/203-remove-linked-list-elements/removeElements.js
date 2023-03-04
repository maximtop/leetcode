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
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
    const dummyHead = new ListNode();
    dummyHead.next = head;
    let prev = dummyHead;
    let curr = head;
    while (curr !== null) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }

        curr = curr.next;
    }
    return dummyHead.next;
};

module.exports = { removeElements };
