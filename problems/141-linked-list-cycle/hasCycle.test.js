const { ListNode } = require('../helpers/linked-list/ListNode');
const { hasCycle, hasCycleHash } = require('./hasCycle');

describe('hasCycle', () => {
    const first = new ListNode(1);
    const second = new ListNode(2);
    const third = new ListNode(3);
    const fourth = new ListNode(4);
    const linkedListWithCycle = first;
    first.next = second;
    second.next = third;
    third.next = fourth;
    fourth.next = second;

    describe('hasCycle two pointers technique', () => {
        it('finds cycle', () => {
            expect(hasCycle(linkedListWithCycle)).toBe(true);
        });
    });

    describe('hasCycle hash technique', () => {
        it('findsCycle', () => {
            expect(hasCycleHash(linkedListWithCycle)).toBe(true);
        });
    });
});

