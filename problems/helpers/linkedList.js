class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const arrToLinkedList = (arr) => {
    return arr.reverse().reduce((acc, el) => {
        if (acc === null) {
            return new ListNode(el);
        }
        return new ListNode(el, acc);
    }, null);
};

const linkedListToArr = (linkedList) => {
    if (linkedList === null) {
        return [];
    }

    const arr = [];
    let currNode = linkedList;
    arr.push(currNode.val);
    while (currNode.next !== null) {
        currNode = currNode.next;
        arr.push(currNode.val);
    }
    return arr;
};

module.exports = {
    arrToLinkedList,
    linkedListToArr,
    ListNode,
};
