/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
    if (root === null) {
        return root;
    }
    const stack = [];
    stack.push(root);
    while (stack.length > 0) {
        const size = stack.length;
        for (let i = 0; i < size; i += 1) {
            const curr = stack.shift();

            if (i < size - 1) {
                // eslint-disable-next-line prefer-destructuring
                curr.next = stack[0];
            }

            if (curr.left !== null) {
                stack.push(curr.left);
            }

            if (curr.right !== null) {
                stack.push(curr.right);
            }
        }
    }

    return root;
};

function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

module.exports = { Node, connect };
