const { MyLinkedList } = require('./myLinkedList');

describe('MyLinkedList', () => {
    const list = new MyLinkedList();
    test.each([
        ['addAtHead', [1], undefined],
        ['addAtTail', [3], undefined],
        ['addAtIndex', [1, 2], undefined],
        ['get', [1], 2],
        ['deleteAtIndex', [1], undefined],
        ['get', [1], 3],
    ])('.%s(%p)', (cmd, val, expected) => {
        expect(list[cmd](...val)).toBe(expected);
    });
    console.log(list);
});
