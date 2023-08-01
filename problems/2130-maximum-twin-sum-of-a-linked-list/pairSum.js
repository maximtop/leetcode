/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function (head) {
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        const temp = slow;
        slow = slow.next;
        temp.next = prev;
        prev = temp;
    }
    let first = prev;
    let second = slow;
    let max = 0;
    while (first) {
        max = Math.max(max, first.val + second.val);
        first = first.next;
        second = second.next;
    }
    return max;
};

module.exports = { pairSum };
