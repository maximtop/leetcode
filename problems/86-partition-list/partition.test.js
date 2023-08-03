/* eslint-disable max-len */
const { ListNode } = require('../helpers/linked-list/ListNode');
const { partition } = require('./partition');

describe('partition', () => {
    it('partitions list', () => {
        expect(partition(new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))))), 3))
            .toEqual(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(5)))))));
    });
});
