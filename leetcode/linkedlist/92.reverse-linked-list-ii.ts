/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (47.49%)
 * Likes:    11298
 * Dislikes: 578
 * Total Accepted:    825.4K
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Given the head of a singly linked list and two integers left and right where
 * left <= right, reverse the nodes of the list from position left to position
 * right, and return the reversed list.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [1,2,3,4,5], left = 2, right = 4
 * Output: [1,4,3,2,5]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [5], left = 1, right = 1
 * Output: [5]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the list is n.
 * 1 <= n <= 500
 * -500 <= Node.val <= 500
 * 1 <= left <= right <= n
 * 
 * 
 * 
 * Follow up: Could you do it in one pass?
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let dummyNode = new ListNode(0, head)
    let previousNode = dummyNode
    let currentNode = head
    // [1,2]
    for(var i = 0; i < left - 1; i++) {
        previousNode = currentNode
        currentNode = currentNode.next
    }

    // [1,2,4,(3)]
    
    let previous = null
    // 4 - 2 = 2 + 3
    for(var i = 0; i < right - left +1; i++) {
        const tempNext = currentNode.next
        currentNode.next = previous
        previous = currentNode
        currentNode = tempNext
    }

    // update pointers
    previousNode.next.next = currentNode
    previousNode.next = previous
    return dummyNode.next
};
// @lc code=end

