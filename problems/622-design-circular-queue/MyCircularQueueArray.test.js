const { MyCircularQueue } = require('./MyCircularQueueArray');

describe('MyCircularQueue', () => {
    it('works', () => {
        const queue = new MyCircularQueue(3);
        expect(queue.Front()).toEqual(-1);
        expect(queue.Rear()).toEqual(-1);

        expect(queue.enQueue(1)).toBe(true);
        expect(queue.Front()).toEqual(1);
        expect(queue.Rear()).toEqual(1);

        expect(queue.enQueue(2)).toBe(true);
        expect(queue.Front()).toEqual(1);
        expect(queue.Rear()).toEqual(2);

        expect(queue.enQueue(3)).toBe(true);
        expect(queue.Front()).toEqual(1);
        expect(queue.Rear()).toEqual(3);

        expect(queue.enQueue(4)).toBe(false);
        expect(queue.Front()).toEqual(1);
        expect(queue.Rear()).toEqual(3);

        expect(queue.deQueue()).toBe(true);
        expect(queue.Front()).toEqual(2);
        expect(queue.Rear()).toEqual(3);

        expect(queue.deQueue()).toBe(true);
        expect(queue.Front()).toEqual(3);
        expect(queue.Rear()).toEqual(3);

        expect(queue.enQueue(4)).toBe(true);
        expect(queue.Front()).toEqual(3);
        expect(queue.Rear()).toEqual(4);

        expect(queue.deQueue()).toBe(true);
        expect(queue.Front()).toEqual(4);
        expect(queue.Rear()).toEqual(4);

        expect(queue.deQueue()).toBe(true);
        expect(queue.Front()).toEqual(-1);
        expect(queue.Rear()).toEqual(-1);

        expect(queue.deQueue()).toBe(false);
        expect(queue.Front()).toEqual(-1);
        expect(queue.Rear()).toEqual(-1);
    });

    it('works with testcase from leetcode', () => {
        const queue = new MyCircularQueue(3);
        expect(queue.enQueue(7)).toBe(true);
        expect(queue.deQueue()).toBe(true);
        expect(queue.Front()).toBe(-1);
        expect(queue.deQueue()).toBe(false);
        expect(queue.Front()).toBe(-1);
        expect(queue.Rear()).toBe(-1);
        expect(queue.enQueue(0)).toBe(true);
        expect(queue.isFull()).toBe(false);
    });
});
