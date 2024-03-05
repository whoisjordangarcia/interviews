/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (62.73%)
 * Likes:    16833
 * Dislikes: 625
 * Total Accepted:    2M
 * Total Submissions: 3.2M
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * Given an integer array nums and an integer k, return the k most frequent
 * elements. You may return the answer in any order.
 * 
 * 
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 * 
 * 
 * 
 * Follow up: Your algorithm's time complexity must be better than O(n log n),
 * where n is the array's size.
 * 
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    let map = {}
    let frequency = []
    for(var i = 0; i < nums.length; i++) {
        const num = nums[i]
        if(map[num]) {
            map[num]++
        } else {
            map[num] = 1
        }
    }
    console.log(map)

    for(let [k, value] of Object.entries(map)) {
        if(!frequency[value as number]) {
            frequency[value as number] = [k]
        } else {
            frequency[value as number].push(k)
        }
    }
    console.log(frequency)

    const ans = []
    for(let i = frequency.length - 1; i >= 0; i--) {
        if(!frequency[i]) {
            continue
        }
        for(var num of frequency[i]) {
            ans.push(num)
            if(ans.length == k) {
                return ans
            }
        }
    }
    return ans
};
// @lc code=end

