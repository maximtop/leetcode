const { ListNode } = require('../helpers/linked-list/ListNode');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode();
    let curr1 = list1;
    let curr2 = list2;
    let dummyCurr = dummy;

    while (curr1 !== null && curr2 !== null) {
        if (curr1.val <= curr2.val) {
            dummyCurr.next = curr1;
            curr1 = curr1.next;
        } else {
            dummyCurr.next = curr2;
            curr2 = curr2.next;
        }
        dummyCurr = dummyCurr.next;
    }

    if (curr1 !== null) {
        dummyCurr.next = curr1;
    } else if (curr2 !== null) {
        dummyCurr.next = curr2;
    }

    return dummy.next;
};

const mergeTwoListsRecursive = function (list1, list2) {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }

    if (list1.val < list2.val) {
        // eslint-disable-next-line no-param-reassign
        list1.next = mergeTwoListsRecursive(list1.next, list2);
        return list1;
    }
    // eslint-disable-next-line no-param-reassign
    list2.next = mergeTwoListsRecursive(list1, list2.next);
    return list2;
};

module.exports = { mergeTwoLists, mergeTwoListsRecursive };
