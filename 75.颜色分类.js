/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let c0 = 0, c1 = 0, c2 = 0
    nums.forEach((v) => {
        if (v === 0) {
            c0++
        } else if (v === 1) {
            c1++
        } else {
            c2++
        }
    })
    let i = 0
    for (; i < c0; i++) {
        nums[i] = 0
    }
    for (; i < c0 + c1; i++) {
        nums[i] = 1
    }
    for (; i < c0 + c1 + c2; i++) {
        nums[i] = 2
    }
};
// @lc code=end
arr = [2, 0, 2, 1, 1, 0]
sortColors(arr)
console.log(arr)