/*
 * @lc app=leetcode id=424 lang=typescript
 *
 * [424] Longest Repeating Character Replacement
 *
 * https://leetcode.com/problems/longest-repeating-character-replacement/description/
 *
 * algorithms
 * Medium (53.38%)
 * Likes:    10147
 * Dislikes: 470
 * Total Accepted:    666.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '"ABAB"\n2'
 *
 * You are given a string s and an integer k. You can choose any character of
 * the string and change it to any other uppercase English character. You can
 * perform this operation at most k times.
 * 
 * Return the length of the longest substring containing the same letter you
 * can get after performing the above operations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 * The substring "BBBB" has the longest repeating letters, which is 4.
 * There may exists other ways to achieve this answer too.
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 10^5
 * s consists of only uppercase English letters.
 * 0 <= k <= s.length
 * 
 * 
 */

// [A,B,A,B,A,B,B,A]

// @lc code=start
function characterReplacement(s: string, k: number): number {
    let map = {}
    let left = 0
    let length = 0
    for(var right = 0; right < s.length; right++) {
        const char = s[right]
        if(map[char]) {
            map[char]++
        } else {
            map[char] = 1
        }
        while(((right - left + 1) - Math.max(...Object.values(map) as number[])) > k){
            map[s[left]] -= 1
            left++
        }
        length = Math.max(length, right - left + 1)
    }
    return length
};

// Space O(1)
// Time O(n)
// @lc code=end

