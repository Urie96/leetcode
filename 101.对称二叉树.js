/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
    function isSymmetric(p, q) {
        if (!p && !q) {
            return true
        }
        if (!p || !q || p.val != q.val) {
            return false
        }
        return isSymmetric(p.left, q.right) && isSymmetric(p.right, q.left)
    }
    if (!root) {
        return true
    }
    return isSymmetric(root.left, root.right)
};
// @lc code=end

