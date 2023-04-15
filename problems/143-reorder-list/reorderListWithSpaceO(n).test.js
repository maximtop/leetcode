const { ListNode } = require('../helpers/linked-list/ListNode');
const { reorderList } = require('./reorderListWithSpaceO(n)');

describe('reorderList', () => {
    it('reorders list', () => {
        const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
        reorderList(list);
        expect(list).toEqual(new ListNode(1, new ListNode(4, new ListNode(2, new ListNode(3)))));

        const list2 = new ListNode(
            1,
            new ListNode(
                2,
                new ListNode(
                    3,
                    new ListNode(
                        4,
                        new ListNode(5),
                    ),
                ),
            ),
        );
        reorderList(list2);
        expect(list2).toEqual(new ListNode(
            1,
            new ListNode(
                5,
                new ListNode(
                    2,
                    new ListNode(
                        4,
                        new ListNode(3),
                    ),
                ),
            ),
        ));
    });
});
