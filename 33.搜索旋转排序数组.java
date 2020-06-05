/*
 * @lc app=leetcode.cn id=33 lang=java
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
class Solution {
    public int search(int[] nums, int target) {
        if (nums.length == 0) {
            return -1;
        }
        int s = 0, e = nums.length - 1;
        while (s <= e) {
            int m = (s + e) / 2;
            if (nums[m] == target) {
                return m;
            }
            if (nums[m] >= nums[0]) {
                if (nums[m] >= target && target >= nums[0]) {
                    e = m - 1;
                } else {
                    s = m + 1;
                }
            } else {
                if (nums[m] <= target && target <= nums[nums.length - 1]) {
                    s = m + 1;
                } else {
                    e = m - 1;
                }
            }
        }
        return -1;
    }
}
// @lc code=end
