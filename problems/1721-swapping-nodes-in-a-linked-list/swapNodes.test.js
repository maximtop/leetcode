const { swapNodes } = require('./swapNodes');
const { ListNode } = require('../helpers/linked-list/ListNode');

describe('swapNodes', () => {
    it('swaps nodes values', () => {
        expect(swapNodes(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))), 2))
            .toEqual(new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(4)))));

        const tree = new ListNode(
            7,
            new ListNode(
                9,
                new ListNode(
                    6,
                    new ListNode(
                        6,
                        new ListNode(
                            7,
                            new ListNode(
                                8,
                                new ListNode(
                                    3,
                                    new ListNode(
                                        0,
                                        new ListNode(
                                            9,
                                            new ListNode(5),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        );
        const expectedTree = new ListNode(
            7,
            new ListNode(
                9,
                new ListNode(
                    6,
                    new ListNode(
                        6,
                        new ListNode(
                            8,
                            new ListNode(
                                7,
                                new ListNode(
                                    3,
                                    new ListNode(
                                        0,
                                        new ListNode(
                                            9,
                                            new ListNode(5),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        );

        expect(swapNodes(tree, 5)).toEqual(expectedTree);
    });
});
