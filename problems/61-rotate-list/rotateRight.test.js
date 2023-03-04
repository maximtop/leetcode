const { rotateRight, getLength } = require('./rotateRight');
const { ListNode } = require('../helpers/linked-list/ListNode');

describe('rotateRight', () => {
    it('rotates linked list', () => {
        expect(rotateRight(new ListNode(1, new ListNode(2, new ListNode(3))), 1))
            .toEqual(new ListNode(3, new ListNode(1, new ListNode(2))));

        expect(rotateRight(new ListNode(1, new ListNode(2, new ListNode(3))), 2))
            .toEqual(new ListNode(2, new ListNode(3, new ListNode(1))));

        expect(rotateRight(new ListNode(
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
        ), 2))
            .toEqual(new ListNode(
                4,
                new ListNode(
                    5,
                    new ListNode(
                        1,
                        new ListNode(
                            2,
                            new ListNode(3),
                        ),
                    ),
                ),
            ));
    });

    it('rotates empty and one element lists', () => {
        expect(rotateRight(null, 1)).toEqual(null);
        expect(rotateRight(new ListNode(1), 5)).toEqual(new ListNode(1));
    });

    it('rotates correctly when k is bigger than length of linked list', () => {
        expect(rotateRight(new ListNode(1, new ListNode(2, new ListNode(3))), 6))
            .toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
    });
});

describe('getLength', () => {
    it('gets length', () => {
        expect(getLength(new ListNode(1))).toEqual(1);
        expect(getLength(new ListNode(1, new ListNode(2)))).toEqual(2);
    });
});
