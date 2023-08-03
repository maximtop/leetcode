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
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
    const lessDump = new ListNode();
    let lessDumpTail = lessDump;
    const moreDump = new ListNode();
    let moreDumpTail = moreDump;
    while (head) {
        if (head.val < x) {
            lessDumpTail.next = head;
            lessDumpTail = lessDumpTail.next;
        } else {
            moreDumpTail.next = head;
            moreDumpTail = moreDumpTail.next;
        }
        head = head.next;
    }
    lessDumpTail.next = moreDump.next;
    moreDumpTail.next = null;
    return lessDump.next;
};

module.exports = { partition };
