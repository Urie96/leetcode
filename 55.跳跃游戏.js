/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length <= 1) {
        return true
    }
    if (nums[0] === 0) {
        return false
    }
    let nextMax = 0
    for (let i = 0; i < nums.length; i++) {
        nextMax = Math.max(nextMax, i + nums[i])
        if (nextMax >= nums.length - 1) {
            return true
        }
        if (nextMax === i) {
            return false
        }
    }
};
// @lc code=end

console.log(canJump([3, 2, 1, 0, 4]))