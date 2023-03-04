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
    let head1 = l1;
    let head2 = l2;
    const dummy = new ListNode();
    let pointer = dummy;

    while (head1 || head2 || carry) {
        const num1 = head1 ? head1.val : 0;
        const num2 = head2 ? head2.val : 0;
        const sum = num1 + num2 + carry;
        carry = 0;
        let num = sum;
        if (sum > 9) {
            num = sum % 10;
            carry = Math.floor(sum / 10);
        }
        pointer.next = new ListNode(num);
        if (!head1?.next && !head2?.next) {
            if (carry) {
                pointer.next.next = new ListNode(carry);
            }
            break;
        }

        head1 = head1 ? head1.next : null;
        head2 = head2 ? head2.next : null;
        pointer = pointer.next;
    }

    return dummy.next;
};

module.exports = { addTwoNumbers };
