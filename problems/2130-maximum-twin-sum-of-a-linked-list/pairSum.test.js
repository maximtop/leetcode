const { pairSum } = require('./pairSum');
const { ListNode } = require('../helpers/linked-list/ListNode');

describe('pairSum', () => {
    it('finds max sum in twins elements', () => {
        expect(pairSum(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))))).toBe(5);
        expect(pairSum(new ListNode(1, new ListNode(2)))).toBe(3);
    });
});
