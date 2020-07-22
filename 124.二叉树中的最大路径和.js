/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var max = 0
var maxPathSum = function (root) {
    var max = Number.NEGATIVE_INFINITY
    function method(root) {
        if (root === null) {
            return 0
        }
        let leftMax = method(root.left)
        let rightMax = method(root.right)
        leftMax = leftMax < 0 ? 0 : leftMax
        rightMax = rightMax < 0 ? 0 : rightMax
        thisMax = root.val + Math.max(leftMax, rightMax)
        max = Math.max(max, root.val + rightMax + leftMax)
        return thisMax
    }
    method(root)
    return max
};
// @lc code=end

