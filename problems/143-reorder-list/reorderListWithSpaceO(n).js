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
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
    const arr = [];
    while (head !== null) {
        const temp = head;
        head = head.next;
        temp.next = null;
        arr.push(temp);
    }
    let left = 0;
    let right = arr.length - 1;
    const dump = new ListNode();
    let tail = dump;
    while (left < right) {
        tail.next = arr[left];
        tail = tail.next;
        tail.next = arr[right];
        tail = tail.next;
        left += 1;
        right -= 1;
    }

    if (left === right) {
        tail.next = arr[left];
    }
};

module.exports = { reorderList };
