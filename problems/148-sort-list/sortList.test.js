const { sortList, getMid } = require('./sortList');
const { ListNode } = require('../helpers/linked-list/ListNode');

describe('getMid', () => {
    it('returns mid', () => {
        expect(getMid(new ListNode(1))).toEqual(new ListNode(1));
        expect(getMid(new ListNode(1, new ListNode(2)))).toEqual(new ListNode(1, new ListNode(2)));
        expect(getMid(new ListNode(1, new ListNode(2, new ListNode(3)))))
            .toEqual(new ListNode(2, new ListNode(3)));
        expect(getMid(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))))
            .toEqual(new ListNode(2, new ListNode(3, new ListNode(4))));
    });
});

describe('sortList', () => {
    it('sorts list', () => {
        expect(sortList(null)).toEqual(null);
        expect(sortList(new ListNode(1))).toEqual(new ListNode(1));
        expect(sortList(new ListNode(2, new ListNode(1))))
            .toEqual(new ListNode(1, new ListNode(2)));
        expect(sortList(new ListNode(2, new ListNode(3, new ListNode(1)))))
            .toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
    });
});
