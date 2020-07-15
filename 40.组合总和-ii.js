/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = []
    function compute(start, remain, path) {
        if (remain === 0) {
            res.push([...path])
            return
        }
        for (let i = start; i < candidates.length; i++) {
            let r = remain - candidates[i]
            if (r < 0) {
                return
            }
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue
            }
            path.push(candidates[i])
            compute(i + 1, r, path)
            path.pop(candidates[i])
        }
    }
    candidates.sort((a, b) => a - b)
    compute(0, target, [])
    return res
};
// @lc code=end

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))