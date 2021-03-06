/*
 * @lc app=leetcode.cn id=4 lang=java
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length < nums2.length) {
            int[] temp = nums1;
            nums1 = nums2;
            nums2 = temp;
        }
        int iMax = (nums1.length + nums2.length) / 2;
        int iMin = (nums1.length - nums2.length) / 2;
        int i = 0, j = 0;
        while (iMax >= iMin) {
            i = (iMax + iMin) / 2;
            j = (nums1.length + nums2.length) / 2 - i;
            if (i > 0 && j < nums2.length && nums1[i - 1] > nums2[j]) {
                iMax = i - 1;
            } else if (j > 0 && i < nums1.length && nums1[i] < nums2[j - 1]) {
                iMin = i + 1;
            } else {
                break;
            }
        }
        int leftMax = Math.max(i > 0 ? nums1[i - 1] : Integer.MIN_VALUE, j > 0 ? nums2[j - 1] : Integer.MIN_VALUE);
        int rightMin = Math.min(i < nums1.length ? nums1[i] : Integer.MAX_VALUE,
                j < nums2.length ? nums2[j] : Integer.MAX_VALUE);
        if ((nums1.length + nums2.length) % 2 == 1) {
            return rightMin;
        }
        return ((double) rightMin + leftMax) / 2;
    }
}
// @lc code=end
