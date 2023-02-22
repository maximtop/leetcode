/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycleHash = function (head) {
    const nodesSeen = new Set();
    while (head !== null) {
        if (nodesSeen.has(head)) {
            return true;
        }
        nodesSeen.add(head);
        head = head.next;
    }
    return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
    if (head === null) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (fast !== slow) {
        if (fast === null || fast.next === null) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};

module.exports = { hasCycle, hasCycleHash };
