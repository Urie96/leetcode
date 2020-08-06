/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let lastVal = Number.NEGATIVE_INFINITY
    function method(root) {
        if (!root) {
            return true
        }
        if (!method(root.left)) {
            return false
        }
        if (lastVal >= root.val) {
            return false
        }
        lastVal = root.val
        if (!method(root.right)) {
            return false
        }
        return true
    }
    return method(root)
};
// @lc code=end

const tree = TreeNode.generate([5, 1, 4, null, null, 3, 6])
tree.print()
console.log(isValidBST(tree))