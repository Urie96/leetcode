/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let l = 0, r = nums.length
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        let middle = nums[m]
        let left = m - 1 < 0 ? Number.NEGATIVE_INFINITY : nums[m - 1]
        let right = m + 1 >= nums.length ? Number.NEGATIVE_INFINITY : nums[m + 1]
        if ((left < middle) && (middle > right)) {
            return m
        } else if ((left < middle) && (middle < right)) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
};
// @lc code=end
console.log(findPeakElement([2, 1]))
