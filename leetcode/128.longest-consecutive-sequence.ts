/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 *
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Medium (47.31%)
 * Likes:    19349
 * Dislikes: 935
 * Total Accepted:    1.6M
 * Total Submissions: 3.4M
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * Given an unsorted array of integers nums, return the length of the longest
 * consecutive elements sequence.
 * 
 * You must write an algorithm that runs in O(n) time.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
 * Therefore its length is 4.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 
 * 
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    if(nums.length === 0) {
        return 0
    }
    const sortedNums = nums.sort((a,b) => a - b)
    console.log(sortedNums)
    let consecutive = 1
    for(var i = 1; i < sortedNums.length; i++) {
        console.log('l'+(sortedNums[i - 1] + 1))
        console.log('r'+ (sortedNums[i]))

        if(sortedNums[i - 1] + 1 == (sortedNums[i])) {
            consecutive++
        }
    }
    return consecutive 
};
// @lc code=end


// 0, 3, 7 ,2 ,5 ,8 ,4 ,6 , 0 ,1

// sort() - n(log n )
