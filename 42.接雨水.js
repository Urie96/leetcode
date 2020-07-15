/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let l = 0, r = height.length - 1
    let lmax = 0, rmax = 0
    let res = 0
    while (l < r) {
        lmax = Math.max(height[l], lmax)
        rmax = Math.max(height[r], rmax)
        if (lmax <= rmax) {
            res += lmax - height[l++]
        } else {
            res += rmax - height[r--]
        }
    }
    return res
};
// @lc code=end

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))