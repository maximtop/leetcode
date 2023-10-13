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
const deleteMiddle = function (head) {
    if (!head || !head.next) {
        return null;
    }
    let fast = head;
    let slow = head;
    let prev = slow;
    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    prev.next = prev.next.next;
    return head;
};

module.exports = { deleteMiddle };
