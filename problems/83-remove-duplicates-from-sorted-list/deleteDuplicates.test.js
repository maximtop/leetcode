const { ListNode } = require('../helpers/linked-list/ListNode');
const { deleteDuplicates } = require('./deleteDuplicates');

describe('deleteDuplicates', () => {
    it('removes duplicates from sorted linked list', () => {
        const tree = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3))));
        expect(deleteDuplicates(tree)).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
    });
});
