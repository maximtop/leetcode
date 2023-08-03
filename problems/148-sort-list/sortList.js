const { ListNode } = require('../helpers/linked-list/ListNode');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const getPreMid = (head) => {
    let slow = head;
    let fast = head.next; // actually, we do this to return node prev to mid
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

const mergeLists = (left, right) => {
    const dumpHead = new ListNode();
    let dumpCur = dumpHead;
    while (left && right) {
        let temp = null;
        if (left.val < right.val) {
            temp = left;
            left = left.next;
        } else {
            temp = right;
            right = right.next;
        }
        temp.next = null;
        dumpCur.next = temp;
        dumpCur = dumpCur.next;
    }
    if (left) {
        dumpCur.next = left;
    }
    if (right) {
        dumpCur.next = right;
    }

    return dumpHead.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let left = head;
    const mid = getPreMid(head);
    let right = mid.next;
    mid.next = null; // thus we make left end to end

    left = sortList(left);
    right = sortList(right);

    return mergeLists(left, right);
};

module.exports = { sortList, getMid: getPreMid };
