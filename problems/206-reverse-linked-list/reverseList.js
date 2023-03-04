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
    const dummyHead = new ListNode();
    let cur = head;
    while (cur !== null) {
        const temp = dummyHead.next;
        dummyHead.next = cur;
        cur = cur.next;
        dummyHead.next.next = temp;
    }
    return dummyHead.next;
};

module.exports = { reverseList };
