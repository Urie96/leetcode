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

    static generate2(arr) {
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

    static generate(arr) {
        let [first, ...rest] = arr
        let root = new TreeNode(first)
        let queue = [root]
        let p
        let shouldLeft = false
        for (let v of rest) {
            shouldLeft = !shouldLeft
            if (shouldLeft) {
                p = queue.shift()
            }
            if (!v) {
                continue
            }
            let leaf = new TreeNode(v)
            queue.push(leaf)
            if (shouldLeft) {
                p.left = leaf
            } else {
                p.right = leaf
            }
        }
        return root
    }
    _toArray1() {
        let maxNodeCount = Math.pow(2, this.getMaxDepth()) - 1
        let queue = [this]
        let res = []
        while (res.length < maxNodeCount) {
            let p = queue.shift()
            if (p) {
                res.push(p.val)
                queue.push(p.left, p.right)
            } else {
                res.push(null)
                queue.push(null, null)
            }
        }
        return res
    }

    print() {
        function enhanceStringLength(str, spacesLength) {
            if (!str) {
                return " ".repeat(spacesLength)
            }
            str = "" + str
            let beginSpaces = " ".repeat(Math.floor((spacesLength - str.length) / 2))
            let tailSpaces = " ".repeat(spacesLength - beginSpaces.length - str.length)
            return beginSpaces + str + tailSpaces
        }
        function getMaxValueStringLength(root) {
            if (root === null || root === undefined) {
                return 0
            }
            let thisLength = ("" + root.val).length
            return Math.max(thisLength, getMaxValueStringLength(root.left), getMaxValueStringLength(root.right))
        }
        let maxValueStringLength = getMaxValueStringLength(this)
        let maxDepth = this.getMaxDepth()
        let rowLevel = 1
        let nodes = this._toArray1()
        while (rowLevel <= maxDepth) {
            let thisRowStr = ""
            let beginSpaces = " ".repeat(maxValueStringLength).repeat(Math.pow(2, maxDepth - rowLevel) - 1)
            let middleSpaces = " ".repeat(maxValueStringLength).repeat(Math.pow(2, maxDepth - rowLevel + 1) - 1)
            thisRowStr += beginSpaces
            let thisRowNodeCount = Math.pow(2, rowLevel - 1)
            for (let i = 0; i < thisRowNodeCount; i++) {
                thisRowStr += enhanceStringLength(nodes.shift(), maxValueStringLength)
                if (i < thisRowNodeCount) {
                    thisRowStr += middleSpaces
                }
            }
            console.log(thisRowStr)
            rowLevel++
        }
    }

    getMaxDepth() {
        let leftMax = this.left ? this.left.getMaxDepth() : 0
        let rightMax = this.right ? this.right.getMaxDepth() : 0
        return 1 + Math.max(leftMax, rightMax)
    }
}

module.exports = { ListNode, TreeNode }
