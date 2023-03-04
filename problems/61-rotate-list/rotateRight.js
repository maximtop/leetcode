/* eslint-disable no-use-before-define */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
    if (head === null || head.next === null) {
        return head;
    }

    const length = getLength(head);

    for (let i = 0; i < k % length; i += 1) {
        // eslint-disable-next-line no-param-reassign
        head = rotateOnce(head);
    }

    return head;
};

const rotateOnce = (head) => {
    if (head === null || head.next === null) {
        return head;
    }
    let curr = head;
    while (curr.next !== null && curr.next.next !== null) {
        curr = curr.next;
    }
    const preLast = curr;
    const last = curr.next;
    preLast.next = null;
    last.next = head;
    return last;
};

function getLength(head) {
    let counter = 0;
    let curr = head;
    while (curr !== null) {
        counter += 1;
        curr = curr.next;
    }
    return counter;
}

module.exports = { rotateRight, getLength };
