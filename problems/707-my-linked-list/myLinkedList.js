var MyListNode = function (val) {
    this.val = val;
    this.next = null;
};

var MyLinkedList = function () {
    this.head = new MyListNode();
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let curr = this.head;
    while (index > 0) {
        if (curr.next === null) {
            return undefined;
        }
        curr = curr.next;
        index -= 1;
    }
    return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    if (this.head.val === undefined && this.head.next === null) {
        this.head.val = val;
        return;
    }
    const prevHead = this.head;
    this.head = new MyListNode(val);
    this.head.next = prevHead;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (this.head.val === undefined && this.head.next === null) {
        this.head.val = val;
        return;
    }
    let curr = this.head;
    while (curr.next !== null) {
        curr = curr.next;
    }
    curr.next = new MyListNode(val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let curr = this.head;
    while (index > 0) {
        if (curr.next === null) {
            curr.next = new MyListNode();
        }
        curr = curr.next;
        index -= 1;
    }
    curr.val = val;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let prev = this.head;
    let curr = this.head.next;
    while (index > 1 && curr.next !== null) {
        prev = curr;
        curr = curr.next;
        index -= 1;
    }

    if (curr.next !== null) {
        prev.next = curr.next;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

module.exports = { MyLinkedList };
