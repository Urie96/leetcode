/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

const { TreeNode } = require("./ds.js")
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    let queue = [root, null]
    let res = []
    let thisRow = []
    while (queue.length > 0) {
        let p = queue.shift()
        if (!p) {
            res.push(thisRow)
            thisRow = []
            if (queue.length > 0) {
                queue.push(null)
            }
            continue
        }
        thisRow.push(p.val)
        if (p.left) {
            queue.push(p.left)
        }
        if (p.right) {
            queue.push(p.right)
        }
    }
    return res
};
// @lc code=end

let tree = TreeNode.generate([3, 9, 20, null, null, 15, 7])
tree.print()
console.log(levelOrder(tree))