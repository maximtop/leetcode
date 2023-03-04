/* eslint-disable no-use-before-define */
const { ListNode } = require('../helpers/linked-list/ListNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
    if (head === null) {
        return true;
    }

    const middle = getMiddle(head);
    const reversedSecondHalf = reverse(middle.next);

    let p1 = head;
    let p2 = reversedSecondHalf;
    let result = true;
    while (result && p2 !== null) {
        if (p1.val !== p2.val) {
            result = false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }

    middle.next = reverse(reversedSecondHalf);
    return result;
};

function getMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

function reverse(head) {
    const dummy = new ListNode();
    let curr = head;
    while (curr !== null) {
        const nextCurr = curr.next;
        curr.next = dummy.next;
        dummy.next = curr;
        curr = nextCurr;
    }
    return dummy.next;
}

module.exports = { isPalindrome, getMiddle, reverse };
