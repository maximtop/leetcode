const { arrToLinkedList, ListNode, linkedListToArr } = require('./linkedList');

describe("linkedList", () => {
    it("creates linked list from array", () => {
        expect(arrToLinkedList([])).toBe(null);
        expect(arrToLinkedList([1])).toEqual(new ListNode(1));
        expect(arrToLinkedList([1, 2])).toEqual(new ListNode(1, new ListNode(2)));
        expect(arrToLinkedList([1, 2, 3])).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
    });

    it("creates array from linkedList", () => {
        expect(linkedListToArr(new ListNode(1, new ListNode(2, new ListNode(3))))).toEqual([1, 2, 3]);
        expect(linkedListToArr(arrToLinkedList([]))).toEqual([]);
        expect(linkedListToArr(arrToLinkedList([1]))).toEqual([1]);
        expect(linkedListToArr(arrToLinkedList([1, 2]))).toEqual([1, 2]);
    });
});
