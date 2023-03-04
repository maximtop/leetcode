const { arrToLinkedList, linkedListToArr } = require('../helpers/linkedList');
const { addTwoNumbers } = require('./addTwoNumbers');
const { ListNode } = require('../helpers/linked-list/ListNode');

describe('addTwoNumbers', () => {
    it('adds numbers', () => {
        const num1 = new ListNode(1, new ListNode(2, new ListNode(3)));
        const num2 = new ListNode(1, new ListNode(2, new ListNode(3)));
        expect(addTwoNumbers(num1, num2))
            .toEqual(new ListNode(2, new ListNode(4, new ListNode(6))));
    });

    it('adds numbers if lists has different sizes', () => {
        const num1 = new ListNode(1);
        const num2 = new ListNode(3, new ListNode(2, new ListNode(1)));
        const expected = new ListNode(4, new ListNode(2, new ListNode(1)));
        expect(addTwoNumbers(num1, num2)).toEqual(expected);
        expect(addTwoNumbers(num2, num1)).toEqual(expected);
    });
    it('adds numbers if number overflows 10', () => {
        const num1 = new ListNode(7);
        const num2 = new ListNode(7, new ListNode(2, new ListNode(1)));
        const expected = new ListNode(4, new ListNode(3, new ListNode(1)));
        expect(addTwoNumbers(num1, num2)).toEqual(expected);
        expect(addTwoNumbers(num2, num1)).toEqual(expected);
    });
    it('adds numbers if list becomes bigger', () => {
        const num1 = new ListNode(7, new ListNode(7));
        const num2 = new ListNode(7, new ListNode(7));
        const expected = new ListNode(4, new ListNode(5, new ListNode(1)));
        expect(addTwoNumbers(num1, num2)).toEqual(expected);
    });
});
