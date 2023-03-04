const { removeElements } = require('./removeElements');
const { ListNode } = require('../helpers/linked-list/ListNode');

describe('removeElements', () => {
    it('removes elements', () => {
        expect(removeElements(new ListNode(
            1,
            new ListNode(
                2,
                new ListNode(
                    3,
                    new ListNode(2),
                ),
            ),
        ), 2))
            .toEqual(new ListNode(1, new ListNode(3)));
    });
});
