const { reverseBetween } = require('./reverseBetween');
const { ListNode } = require('../helpers/linked-list/ListNode');

describe('reverseBetween', () => {
    it('reverses', () => {
        const tree = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        const expectedTree = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5)))));
        expect(reverseBetween(tree, 2, 4)).toEqual(expectedTree);
    });
});
