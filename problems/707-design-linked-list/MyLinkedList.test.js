const { MyLinkedList } = require('./MyLinkedList');

describe('MyLinkedList', () => {
    it('works', () => {
        const linkedList = new MyLinkedList();
        linkedList.addAtHead(1);
        expect(linkedList.get(0)).toBe(1);
        linkedList.addAtTail(3);
        expect(linkedList.get(0)).toBe(1);
        expect(linkedList.get(1)).toBe(3);
        expect(linkedList.get(2)).toBe(-1);
        linkedList.addAtIndex(1, 2);
        expect(linkedList.get(0)).toBe(1);
        expect(linkedList.get(1)).toBe(2);
        expect(linkedList.get(2)).toBe(3);
        linkedList.deleteAtIndex(1);
        expect(linkedList.get(0)).toBe(1);
        expect(linkedList.get(1)).toBe(3);
    });
});
