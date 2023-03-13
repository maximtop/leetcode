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
const reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    const reversed = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversed;
};

module.exports = { reverseList };
