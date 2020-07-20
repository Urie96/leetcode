/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let count = Math.pow(2, nums.length)
    let res = []
    for (let i = 0; i < count; i++) {
        let j = i
        let p = 0
        let temp = []
        while (j > 0) {
            if ((j & 1) === 1) {
                temp.push(nums[p])
            }
            j = j >> 1
            p++
        }
        res.push(temp)
    }
    return res
};
// @lc code=end

console.log(subsets([1, 2, 3]))