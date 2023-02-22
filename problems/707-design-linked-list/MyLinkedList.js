class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const MyLinkedList = function () {
    this.size = 0;
    this.head = new ListNode();
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }
    let cur = this.head;
    for (let i = 0; i < index + 1; i += 1) {
        cur = cur.next;
    }
    return cur.value;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    this.addAtIndex(0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    this.addAtIndex(this.size, val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) {
        return;
    }
    if (index < 0) {
        // eslint-disable-next-line no-param-reassign
        index = 0;
    }
    this.size += 1;
    let prev = this.head;
    for (let i = 0; i < index; i += 1) {
        prev = prev.next;
    }
    const toAdd = new ListNode(val);
    toAdd.next = prev.next;
    prev.next = toAdd;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index > this.size - 1) {
        return;
    }
    this.size -= 1;
    let prev = this.head;
    for (let i = 0; i < index; i += 1) {
        prev = prev.next;
    }
    prev.next = prev.next.next;
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
