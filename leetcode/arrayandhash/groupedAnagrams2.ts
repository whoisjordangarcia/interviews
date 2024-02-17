/*
Medium 


Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

{
    [e(4).a(1).t(7)=12]: [eat,tea,ate]
    [t(7).a(1).n(8)=16]: [tan, nat]
    [b(2).a(1).t(7)=10]: [bat]
}

// Time: N
// Space: N


Example 2:

Input: strs = [""]
Output: [[""]]

{
    [-1]: [""]
}

Example 3:

Input: strs = ["a"]
Output: [["a"]]

{
    [1]: [a]
}
 

Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.
*/

function groupAnagrams(strs: string[]): string[][] {
    const hashMap = {} // O(1)
    for (var i = 0; i < strs.length; i++) {
        const word = strs[i];
        const sortedWord = word.split("").sort().join("") // O(N * M log M)
        if (hashMap[sortedWord] == null) {
            hashMap[sortedWord] = [word]
        } else {
            hashMap[sortedWord].push(word)
        }
    }
    return Object.keys(hashMap).map(key => hashMap[key]) // O(n)
}

// N = length of strs entries
// O(N * M log M) average time of the srings is sorted individually 
// Gnerally sorted aray the time complexity is O(n log  n)
// N  is the nubmer of elements to be sorted.
// Average and worst case scenario 
// .sort()  - v8 engine uses quicksort, firefox  uses mergesort, safari relies on selection sort for small arrays, larger merge sort
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))