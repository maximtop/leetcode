class ListNode {
    constructor(val, next, random) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
        this.random = (random === undefined ? null : random);
    }
}

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
    const oldToNew = new Map();
    oldToNew.set(null, null);

    let cur = head;
    while (cur) {
        const newNode = new ListNode(cur.val);
        oldToNew.set(cur, newNode);
        cur = cur.next;
    }

    cur = head;
    while (cur) {
        const newNode = oldToNew.get(cur);
        newNode.next = oldToNew.get(cur.next);
        newNode.random = oldToNew.get(cur.random);
        cur = cur.next;
    }

    return oldToNew.get(head);
};

module.exports = { copyRandomList, ListNode };
