/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEndTwoPasses = function (head, n) {
    let length = 0;

    let curr = head;
    while (curr !== null) {
        curr = curr.next;
        length += 1;
    }
    if (length === n) {
        return head.next;
    }

    const indexBeforeRemove = length - (n + 1);

    curr = head;
    for (let i = 0; i < indexBeforeRemove; i += 1) {
        curr = curr.next;
    }
    curr.next = curr.next.next;

    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    let currentNode = head;
    for (let i = 0; i < n; i += 1) {
        currentNode = currentNode.next;
    }

    if (currentNode === null) {
        return head.next;
    }

    let nodeBeforeRemoved = head;
    while (currentNode.next !== null) {
        nodeBeforeRemoved = nodeBeforeRemoved.next;
        currentNode = currentNode.next;
    }

    nodeBeforeRemoved.next = nodeBeforeRemoved.next.next;
    return head;
};

module.exports = { removeNthFromEndTwoPasses, removeNthFromEnd };
