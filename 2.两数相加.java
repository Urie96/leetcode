/*
 * @lc app=leetcode.cn id=2 lang=java
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode sum = new ListNode(0);
        ListNode p = sum;
        int carry = 0;
        while (l1 != null || l2 != null || carry != 0) {
            int num1 = l1 == null ? 0 : l1.val;
            int num2 = l2 == null ? 0 : l2.val;
            if (num1 + num2 + carry >= 10) {
                p.next = new ListNode(num1 + num2 + carry - 10);
                carry = 1;
            } else {
                p.next = new ListNode(num1 + num2 + carry);
                carry = 0;
            }
            p = p.next;
            l1 = l1 == null ? l1 : l1.next;
            l2 = l2 == null ? l2 : l2.next;
        }
        return sum.next;
    }
}
// @lc code=end
