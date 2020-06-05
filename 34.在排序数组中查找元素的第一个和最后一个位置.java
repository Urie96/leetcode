import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=34 lang=java
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int i = Arrays.binarySearch(nums, target);
        if (i < 0) {
            return new int[] { -1, -1 };
        }
        int l = i, r = i;
        while (l > 0 && nums[l - 1] == target) {
            l--;
        }
        while (r + 1 < nums.length && nums[r + 1] == target) {
            r++;
        }
        return new int[] { l, r };
    }
}
// @lc code=end
