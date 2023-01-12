const { MinStack } = require('./MinStack');

describe('MinStack', () => {
    it('works', () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        expect(minStack.getMin()).toBe(-3);
        minStack.pop();
        expect(minStack.top()).toBe(0);
        expect(minStack.getMin()).toBe(-2);
    });

    it('works again', () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-1);
        expect(minStack.getMin()).toBe(-2);
        expect(minStack.top()).toBe(-1);
        minStack.pop();
        expect(minStack.getMin()).toBe(-2);
    });
});
