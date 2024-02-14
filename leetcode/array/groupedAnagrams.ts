/*
Medium 


Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

 

Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

*/

function groupAnagrams(strs: string[]): string[][] {
  const ans = new Map<string, string[]>();

  for (var i = 0; i < strs.length; i++) {
    const count = Array.from({ length: 26 }, () => 0)
    const word = strs[i]
    for (var j = 0; j < word.length; j++) {
      count[(word[j].charCodeAt(0) - 97) - ('a'.charCodeAt(0) - 97)] += 1
    }
    const keyString = count.toString()
    if (!ans.has(keyString)) {
      ans.set(keyString, [])
    }
    ans.get(keyString).push(word)

  }
  return Array.from(ans.values())

};

console.log(groupAnagrams((["eat", "tea", "tan", "ate", "nat", "bat"])))
