class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }

    static generate(arr) {
        let head = new ListNode()
        let p = head
        for (let v of arr) {
            p.next = new ListNode(v)
            p = p.next
        }
        return head.next
    }

    [Symbol.iterator]() {
        let iterator = { next: next };
        let current = this;
        function next() {
            if (current) {
                let value = current.val;
                current = current.next;
                return { done: false, value };
            } else {
                return { done: true };
            }
        }
        return iterator;
    }
}

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }

    static generate(arr) {
        let a = [...arr]
        function gen(i) {
            if (a[i] === null || a[i] === undefined) {
                return null
            }
            let root = new TreeNode(a[i])
            root.left = gen(2 * i + 1)
            root.right = gen(2 * i + 2)
            return root
        }
        return gen(0)
    }

    static generate2(arr) {
        let queue = []
        let root = new TreeNode()
        let p = root
        let shouldLeft = true
        for (let v of arr) {
            if (!v) {
                continue
            }
            let leaf = new TreeNode(v)
            queue.push(leaf)
            if (shouldLeft) {
                p.left = leaf
                shouldLeft = false
            } else {
                p.right = leaf
                shouldLeft = true
            }
        }
        return root
    }
}

export { ListNode, TreeNode }