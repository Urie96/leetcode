import { ListNode } from "./ds.js"
/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let h = new ListNode()
    h.next = head
    let p = h
    while (p && p.next && p.next.next) {
        let temp = p.next.next
        p.next.next = temp.next
        temp.next = p.next
        p.next = temp
        p = p.next.next
    }
    return h.next
};
// @lc code=end

let list = ListNode.generator([1, 2, 3, 4])
console.log(...swapPairs(list))