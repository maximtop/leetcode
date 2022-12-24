class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new TreeNode(val);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, node) {
        // nulls were added to the left and to the right nodes,
        // e.g. [1, null, null, 2] -> new TreeNode(1, new TreeNode(null), new TreeNode(null)), 2 - disappears
        if (root.left?.val === null && root.right?.val === null) {
            return;
        }

        if (!root.left) {
            root.left = node;
            return;
        }

        if (!root.right) {
            root.right = node;
            return;
        }

        this.insertNode(root.left, node);
    }

    getTree() {
        return this.root;
    }
}

const arrToTree = (arr) => {
    const tree = new Tree();
    for (let el of arr) {
        tree.insert(el);
    }
    return tree;
};

// const treeToArr = (tree) => {
//     return tree.toArr()
// };

module.exports = {
    TreeNode,
    arrToTree,
    // treeToArr,
}
