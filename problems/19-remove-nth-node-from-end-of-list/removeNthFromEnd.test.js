const { ListNode } = require('../helpers/linked-list/ListNode');
const { removeNthFromEndTwoPasses, removeNthFromEnd } = require('./removeNthFromEnd');

describe('removeNthFromEnd', () => {
    let linkedList;
    beforeEach(() => {
        linkedList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
    });

    describe('solution in one pass', () => {
        it('removes nth in standard case', () => {
            expect(removeNthFromEnd(linkedList, 2))
                .toEqual(new ListNode(1, new ListNode(2, new ListNode(4))));
        });

        it('removes nth when n is equal to the length', () => {
            expect(removeNthFromEnd(linkedList, 4))
                .toEqual(new ListNode(2, new ListNode(3, new ListNode(4))));
        });
    });

    describe('solution in two passes', () => {
        it('removes nth in standard case', () => {
            expect(removeNthFromEndTwoPasses(linkedList, 2))
                .toEqual(new ListNode(1, new ListNode(2, new ListNode(4))));
        });

        it('removes nth when n is equal to the length', () => {
            expect(removeNthFromEndTwoPasses(linkedList, 4))
                .toEqual(new ListNode(2, new ListNode(3, new ListNode(4))));
        });
    });
});
