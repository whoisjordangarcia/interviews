/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (64.23%)
 * Likes:    11718
 * Dislikes: 377
 * Total Accepted:    3.2M
 * Total Submissions: 5M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 * 
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 * 
 * 
 * 
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 * 
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length)  {
        return false
    }
    const map = {}
    for(var i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]] = 1
        }
    }
    for(var i = 0; i < t.length;i++) {
        if(map[t[i]]) {
            map[t[i]]--
        } else {
            return false
        }
    }
    return true
};
// Space O(n)
// Time  O(n)
// @lc code=end

