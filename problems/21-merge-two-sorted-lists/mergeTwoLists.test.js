const { ListNode } = require('../helpers/linked-list/ListNode');
const { mergeTwoLists, mergeTwoListsRecursive } = require('./mergeTwoLists');

describe('mergeTwoLists', () => {
    describe('mergeTwoListsRecursive', () => {
        it('should sort', () => {
            const list1 = new ListNode(1, new ListNode(3, new ListNode(4)));
            const list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
            expect(mergeTwoListsRecursive(list1, list2)).toEqual(new ListNode(
                1,
                new ListNode(
                    1,
                    new ListNode(
                        2,
                        new ListNode(
                            3,
                            new ListNode(
                                3,
                                new ListNode(
                                    4,
                                    new ListNode(4),
                                ),
                            ),
                        ),
                    ),
                ),
            ));
        });
    });
    it('should sort', () => {
        const list1 = new ListNode(1, new ListNode(3, new ListNode(4)));
        const list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

        expect(mergeTwoLists(list1, list2)).toEqual(new ListNode(
            1,
            new ListNode(
                1,
                new ListNode(
                    2,
                    new ListNode(
                        3,
                        new ListNode(
                            3,
                            new ListNode(
                                4,
                                new ListNode(4),
                            ),
                        ),
                    ),
                ),
            ),
        ));
    });
});
