class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Bst {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    isBalaced() {
        return (this.maxHight() - this.minHight()) <= 0
    }

    insertion(value) {
        const newNode = new Node(value)
        if (this.root == null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left == null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right == null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    minHight(node = this.root) {
        if (node == null) {
            return -1
        }
        let left = this.minHight(node.left)
        let right = this.minHight(node.right)
        if (left < right) {
            return left + 1
        } else {
            return right + 1
        }
    }

    maxHight(node = this.root) {
        if (node == null) {
            return -1
        }
        let left = this.maxHight(node.left)
        let right = this.maxHight(node.right)
        if (left > right) {
            return left + 1
        } else {
            return right + 1
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return `value ${value} is existed`
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
    isBst() {
        let arr = []
        this.inOrder(this.root, arr)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false
            }
        }
        return true
    }
}



const bst = new Bst()
bst.insertion(9)
bst.insertion(4)
bst.insertion(3)
bst.insertion(6)
bst.insertion(5)
bst.insertion(7)
bst.insertion(17)
bst.insertion(22)
bst.insertion(20)
bst.insertion(10)
console.log(bst.search(bst.root, 10));
bst.preOrder(bst.root)
bst.inOrder(bst.root)
bst.postOrder(bst.root)
bst.delete(3)
bst.levelOrder()
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
console.log("Min Height is ", bst.minHight())
console.log("Max Height is ", bst.maxHight())
console.log(bst.isBalaced());
console.log(bst.isBst());