/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = Number.NEGATIVE_INFINITY
    let sum = 0
    nums.forEach(num => {
        sum += num
        max = Math.max(sum, max)
        if (sum < 0) {
            sum = 0
        }
    })
    return max
};
// @lc code=end

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))