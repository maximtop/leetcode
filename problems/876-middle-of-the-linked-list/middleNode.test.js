const { middleNode } = require('./middleNode');
const { ListNode } = require('../helpers/linked-list/ListNode');

describe('middleNode', () => {
    it('finds middle node', () => {
        expect(
            middleNode(new ListNode(
                1,
                new ListNode(
                    2,
                    new ListNode(
                        3,
                        new ListNode(4),
                        new ListNode(5),
                    ),
                ),
            )),
        ).toEqual(new ListNode(3, new ListNode(4), new ListNode(5)));
        expect(middleNode(null)).toEqual(null);
        expect(middleNode(new ListNode(1))).toEqual(new ListNode(1));
        expect(middleNode(new ListNode(1, new ListNode(2)))).toEqual(new ListNode(2));
        expect(middleNode(new ListNode(1, new ListNode(2, new ListNode(3)))))
            .toEqual(new ListNode(2, new ListNode(3)));
    });
});
