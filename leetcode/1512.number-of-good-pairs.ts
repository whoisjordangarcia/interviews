/*
 * @lc app=leetcode id=1512 lang=typescript
 *
 * [1512] Number of Good Pairs
 *
 * https://leetcode.com/problems/number-of-good-pairs/description/
 *
 * algorithms
 * Easy (88.91%)
 * Likes:    5233
 * Dislikes: 232
 * Total Accepted:    703.4K
 * Total Submissions: 791.2K
 * Testcase Example:  '[1,2,3,1,1,3]'
 *
 * Given an array of integers nums, return the number of good pairs.
 * 
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1,1,1,1]
 * Output: 6
 * Explanation: Each pair in the array are good.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: nums = [1,2,3]
 * Output: 0
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 * 
 * 
 */

// @lc code=start
function numIdenticalPairs(nums: number[]): number {
    const hash  ={}
    let count = 0
    for(var i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            count += hash[nums[i]]
            hash[nums[i]] += 1
        }
    }
    return count
};
// @lc code=end

