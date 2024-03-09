/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (64.27%)
 * Likes:    11743
 * Dislikes: 378
 * Total Accepted:    3.3M
 * Total Submissions: 5.1M
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
    let map = {}
    if(s.length != t.length) {
        return false
    }

    for(var i = 0; i < s.length; i++) {
        const letter = s[i]
        if(map[letter]) {
            map[letter]++
        } else {
            map[letter] = 1
        }
    }
    console.log(map)
    for(var i = 0; i < t.length; i++) {
        const letter = t[i]
        if(map[letter]) {
            map[letter]--
        } else {
            return false
        }
    }
    console.log(map)
    console.log(Object.values(map).filter(x => x == 0).length)
    return Object.values(map).filter(x => x === 0).length === Object.values(map).length
};
// @lc code=end

