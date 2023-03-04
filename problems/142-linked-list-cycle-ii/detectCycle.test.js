const { ListNode } = require('../helpers/linked-list/ListNode');
const { detectCycleWithHashTable } = require('./detectCycle');

describe('detectCycle', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;
    const linkedList = node1;

    describe('detectCycleWithHashTable', () => {
        it('detects cycle', () => {
            expect(detectCycleWithHashTable(linkedList)).toBe(node2);
        });
    });

    describe('detectCycleWithFastAndSlowPointers', () => {
        it('detects cycle', () => {
            expect(detectCycleWithHashTable(linkedList)).toBe(node2);
        });
    });
});
