/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let l = 0, r = 0
    for (; r < nums.length; r++) {
        if (nums[l - 1] !== nums[r] || nums[l - 2] !== nums[r]) {
            nums[l++] = nums[r]
        }
    }
    return l
};
// @lc code=end

let arr = [1, 1, 1, 2, 2, 3]
console.log(removeDuplicates(arr))
console.log(arr)