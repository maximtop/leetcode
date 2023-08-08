const { insertionSortList } = require('./insertionSortList');
const { ListNode } = require('../helpers/linked-list/ListNode');

describe('insertionSortList', () => {
    it('sorts linked list', () => {
        const tree = new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3))));
        const expected = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
        expect(insertionSortList(tree)).toEqual(expected);
    });
});
