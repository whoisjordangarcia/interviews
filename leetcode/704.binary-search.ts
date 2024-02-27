/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 *
 * https://leetcode.com/problems/binary-search/description/
 *
 * algorithms
 * Easy (57.16%)
 * Likes:    11457
 * Dislikes: 234
 * Total Accepted:    2.3M
 * Total Submissions: 3.9M
 * Testcase Example:  '[-1,0,3,5,9,12]\n9'
 *
 * Given an array of integers nums which is sorted in ascending order, and an
 * integer target, write a function to search target in nums. If target exists,
 * then return its index. Otherwise, return -1.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 10^4
 * -10^4 < nums[i], target < 10^4
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 * 
 * 
 */

// @lc code=start
function search(nums: number[], target: number): number {
    let left = 0
    let right = (nums.length - 1)
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if(target > nums[mid]) {
            left = mid + 1
        }  else if (target < nums[mid]) {
            right = mid -1 
        } else {
            return mid
        }
    }
    return -1
};
// Space O(1)
//  Time O(log n)
// @lc code=end

