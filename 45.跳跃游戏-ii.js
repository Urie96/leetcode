/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (nums.length <= 1) {
        return 0
    }
    let steps = 0
    let thisMax = nums[0]
    if (thisMax >= nums.length - 1) {
        return 1
    }
    let nextMax = thisMax
    for (let i = 0; i < nums.length; i++) {
        nextMax = Math.max(nextMax, i + nums[i])
        if (nextMax >= nums.length - 1) {
            return steps + 2
        }
        if (i >= thisMax) {
            steps++
            thisMax = nextMax
        }
    }
    return steps
};
// @lc code=end
console.log(jump([2, 3, 1, 1, 4]))

