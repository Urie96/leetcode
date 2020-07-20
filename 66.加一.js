/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let r = digits.length - 1
    let carry = false;
    for (let i = r; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
            carry = true
        } else {
            digits[i]++
            carry = false
            break
        }
    }
    if (carry) {
        digits.unshift(1)
    }
    return digits
};
// @lc code=end

console.log(plusOne([9, 9, 9]))