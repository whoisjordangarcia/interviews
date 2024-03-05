/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (68.18%)
 * Likes:    18699
 * Dislikes: 583
 * Total Accepted:    2.7M
 * Total Submissions: 4M
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings strs, group the anagrams together. You can return
 * the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 * 
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 * 
 * 
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    const map = {}

    for(var i = 0; i < strs.length; i++) {
        const word = strs[i]
        const sortedWord = word.split("").sort((a, b) => (a.charCodeAt(0) - 26) - (b.charCodeAt(0) - 26)).join("")
        if(!map[sortedWord]) {
            map[sortedWord] = [word]
        } else {
            map[sortedWord].push(word)
        }
    }


    const ans = []
    for(let [key, value] of Object.entries(map)) {
        ans.push(value)
    }
    return ans
};
// @lc code=end

