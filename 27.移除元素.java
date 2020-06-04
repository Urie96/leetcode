/*
 * @lc app=leetcode.cn id=27 lang=java
 *
 * [27] 移除元素
 */

// @lc code=start
class Solution {
    public int removeElement(int[] nums, int val) {
        int l = 0, r = 0;
        while (r < nums.length) {
            if (nums[r] != val) {
                nums[l++] = nums[r];
            }
            r++;
        }
        return l;
    }
}
// @lc code=end
