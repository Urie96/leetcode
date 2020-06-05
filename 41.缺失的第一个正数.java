/*
 * @lc app=leetcode.cn id=41 lang=java
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
class Solution {
    public int firstMissingPositive(int[] nums) {
        int len = nums.length;
        boolean findOne = false;
        for (int i = 0; i < len; i++) {
            if (nums[i] == 1) {
                findOne = true;
            }
            if (nums[i] <= 0 || nums[i] > len) {
                nums[i] = 1;
            }
        }
        if (!findOne) {
            return 1;
        }
        for (int i = 0; i < len; i++) {
            int idx = Math.abs(nums[i]) - 1;
            if (nums[idx] > 0) {
                nums[idx] *= -1;
            }
        }
        for (int i = 0; i < len; i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }
        return len + 1;
    }
}
// @lc code=end
