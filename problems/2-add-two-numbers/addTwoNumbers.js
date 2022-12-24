const { ListNode } = require('../helpers/linkedList');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let carry = 0;
    while (l1 || l2 || carry) {
        const num1 = head1 ? head1.val : 0;
        const num2 = head2 ? head2.val : 0;
        const sum = num1 + num2 + left;
        left = 0;
        let num = sum;
        if (sum > 9) {
            num = sum % 10;
            left = Math.floor(sum / 10);
        }
        nums.push(num);
        if (!head1?.next && !head2?.next) {
            if (left) {
                nums.push(left);
            }
            break;
        }

        head1 = head1 ? head1.next : null;
        head2 = head2 ? head2.next : null;
    }

    return head.next;
};

module.exports = { addTwoNumbers };
