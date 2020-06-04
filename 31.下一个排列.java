import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=31 lang=java
 *
 * [31] 下一个排列
 */

// @lc code=start
class Solution {
    public void nextPermutation(int[] nums) {
        int i = nums.length - 1;
        for (; i > 0; i--) {
            if (nums[i - 1] < nums[i]) {
                break;
            }
        }
        if (i < 1) {
            return;
        }
        for (int j = nums.length - 1; j >= i; j--) {
            if (nums[j] > nums[i - 1]) {
                swap(nums, i - 1, j);
            }
        }
        int j = nums.length - 1;
        while (i < nums.length) {
            swap(nums, i++, j--);
        }
    }

    private void swap(int[] nums, int a, int b) {
        int tmp = nums[a];
        nums[a] = nums[b];
        nums[b] = tmp;
    }
}
// @lc code=end
