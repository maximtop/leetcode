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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
    const dummy = new ListNode();
    dummy.next = head;
    let leftPrev = dummy;
    let curr = head;
    for (let i = 0; i < left - 1; i += 1) {
        leftPrev = curr;
        curr = curr.next;
    }
    let prev = null;
    for (let i = 0; i < (right - left + 1); i += 1) {
        const tmpNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmpNext;
    }

    leftPrev.next.next = curr;
    leftPrev.next = prev;
    return dummy.next;
};

module.exports = { reverseBetween };
