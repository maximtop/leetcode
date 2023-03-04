const { isPalindrome, getMiddle, reverse } = require('./isPalindrome');
const { ListNode } = require('../helpers/linked-list/ListNode');

describe('isPalindrome', () => {
    it('detects palindrome for odd elements', () => {
        expect(isPalindrome(
            new ListNode(
                1,
                new ListNode(
                    2,
                    new ListNode(
                        3,
                        new ListNode(
                            2,
                            new ListNode(1),
                        ),
                    ),
                ),
            ),
        )).toBe(true);
    });

    it('detects palindrome for even number of elements', () => {
        expect(isPalindrome(
            new ListNode(
                1,
                new ListNode(
                    2,
                    new ListNode(
                        2,
                        new ListNode(1),
                    ),
                ),
            ),
        )).toBe(true);
    });
});

describe('getMiddle', () => {
    it('finds middle for odd', () => {
        expect(getMiddle(new ListNode(1, new ListNode(2, new ListNode(1)))))
            .toEqual(new ListNode(2, new ListNode(1)));
    });

    it('finds middle for even', () => {
        expect(getMiddle(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))))
            .toEqual(new ListNode(2, new ListNode(2, new ListNode(1))));
    });
});

describe('reverse', () => {
    it('reverses', () => {
        expect(reverse(new ListNode(1, new ListNode(2)))).toEqual(new ListNode(2, new ListNode(1)));
        expect(reverse(new ListNode(1))).toEqual(new ListNode(1));
        expect(reverse(new ListNode(1, new ListNode(2, new ListNode(3)))))
            .toEqual(new ListNode(3, new ListNode(2, new ListNode(1))));
    });
});
