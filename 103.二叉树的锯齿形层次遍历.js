/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function (root) {
    if (!root) {
        return []
    }
    let thisRowNode = [root]
    let rightToLeft = false
    let res = []
    while (thisRowNode.length > 0) {
        let thisRowRes = thisRowNode.map(v => v.val)
        if (rightToLeft) {
            thisRowRes.reverse()
        }
        res.push(thisRowRes)
        let nextRowNode = []
        thisRowNode.forEach(v => {
            if (v.left) {
                nextRowNode.push(v.left)
            }
            if (v.right) {
                nextRowNode.push(v.right)
            }
        })
        thisRowNode = nextRowNode
        rightToLeft = !rightToLeft
    }
    return res
}
// @lc code=end

const tree = TreeNode.generate([1, 2, 3, 4, null, null, 5])
tree.print()
console.log(zigzagLevelOrder(tree))