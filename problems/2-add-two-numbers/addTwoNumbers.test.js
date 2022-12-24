const { arrToLinkedList, linkedListToArr } = require('../helpers/linkedList');
const { addTwoNumbers } = require('./addTwoNumbers');

describe('addTwoNumbers', () => {
    it('adds numbers', () => {
        const num1 = arrToLinkedList([1, 2, 3].reverse());
        const num2 = arrToLinkedList([1, 2, 3].reverse());
        const expected = [2, 4, 6];
        expect(linkedListToArr(addTwoNumbers(num1, num2)).reverse()).toEqual(expected);
    });
    it('adds numbers if lists has different sizes', () => {
        const num1 = arrToLinkedList([1].reverse()); // [1]
        const num2 = arrToLinkedList([1, 2, 3].reverse()); // [3, 2, 1]
        const expected = [1, 2, 4].reverse(); // [4, 2, 1]
        expect(linkedListToArr(addTwoNumbers(num1, num2))).toEqual(expected);
        expect(linkedListToArr(addTwoNumbers(num2, num1))).toEqual(expected);
    });
    it('adds numbers if number overflows 10', () => {
        const num1 = arrToLinkedList([7].reverse());
        const num2 = arrToLinkedList([1, 2, 7].reverse());
        const expected = [1, 3, 4].reverse();
        expect(linkedListToArr(addTwoNumbers(num1, num2))).toEqual(expected);
        expect(linkedListToArr(addTwoNumbers(num2, num1))).toEqual(expected);
    });
    it('adds numbers if list becomes bigger', () => {
        const num1 = arrToLinkedList([7, 7].reverse());
        const num2 = arrToLinkedList([7, 7].reverse());
        const expected = [1, 5, 4].reverse();
        expect(linkedListToArr(addTwoNumbers(num1, num2))).toEqual(expected);
        expect(linkedListToArr(addTwoNumbers(num2, num1))).toEqual(expected);
    });
});
