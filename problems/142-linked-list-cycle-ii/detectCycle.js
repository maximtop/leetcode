/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycleWithHashTable = function (head) {
    let cur = head;
    const set = new Set();
    while (cur !== null) {
        if (set.has(cur)) {
            return cur;
        }
        set.add(cur);
        cur = cur.next;
    }
    return null;
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
 * @return {ListNode}
 */
const detectCycle = function (head) {
    // eslint-disable-next-line no-shadow
    const getIntersection = (head) => {
        let slow = head;
        let fast = head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast === slow) {
                return fast;
            }
        }
        return null;
    };

    const intersection = getIntersection(head);
    if (intersection === null) {
        return null;
    }
    let ptr1 = head;
    let ptr2 = intersection;
    while (ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return ptr1;
};

module.exports = { detectCycleWithHashTable, detectCycle };
