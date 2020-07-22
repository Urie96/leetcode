/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let l = head, r = head
    for (let i = 0; i < n; i++) {
        r = r.next
    }
    if (r === null) {
        return head.next
    }
    while (r.next !== null) {
        r = r.next
        l = l.next
    }
    l.next = l.next.next
    return head
};
// @lc code=end

