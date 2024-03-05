/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (61.39%)
 * Likes:    11560
 * Dislikes: 1276
 * Total Accepted:    3.7M
 * Total Submissions: 6M
 * Testcase Example:  '[1,2,3,1]'
 *
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 * 
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 
 * 
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const map = {}
    for(var i = 0; i < nums.length;i++) {
        if(map[nums[i]]) {
            return true
        } else {
            map[nums[i]] = 1
        }
    }
    return false
};
// @lc code=end

