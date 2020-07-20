/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target || nums[l] === target) {
            return true
        }
        if (nums[l] > target && nums[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return false
};
// @lc code=end

console.log(search([1, 3, 1, 1, 1], 3))