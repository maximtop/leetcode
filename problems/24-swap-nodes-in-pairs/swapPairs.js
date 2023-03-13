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
const swapPairs = function (head) {
    if (head === null) {
        return head;
    }

    if (head.next === null) {
        return head;
    }

    const firstNode = head;
    const secondNode = head.next;

    firstNode.next = swapPairs(secondNode.next);
    secondNode.next = firstNode;

    return secondNode;
};

module.exports = { swapPairs };
