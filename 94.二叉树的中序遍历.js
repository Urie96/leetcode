import { TreeNode } from "./ds.js"
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = []
    function method(root) {
        if (!root) {
            return
        }
        method(root.left)
        res.push(root.val)
        method(root.right)
    }
    method(root)
    return res
};
// @lc code=end
let tree = TreeNode.generate2([1, null, 2, 3])
console.log(inorderTraversal(tree))
