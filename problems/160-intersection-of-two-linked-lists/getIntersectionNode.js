/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
    const set = new Set();
    let currA = headA;
    while (currA) {
        set.add(currA);
        currA = currA.next;
    }

    let currB = headB;
    while (currB) {
        if (set.has(currB)) {
            return currB;
        }
        currB = currB.next;
    }

    return null;
};

module.exports = { getIntersectionNode };
