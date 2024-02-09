// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// function isAnagram(s: string, t: string): boolean {
//     if (s.length != t.length) {
//         return false
//     }

//     return s.split('').sort().join('') === t.split('').sort().join('')
// };



function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) {
        return false
    }
    const letters = {}
    for (var i = 0; i < s.length; i++) {
        letters[s[i]] = letters[s[i]] ? letters[s[i]] + 1 : 1
    }
    for (var i = 0; i < t.length; i++) {
        if (!letters[t[i]]) {
            return false
        }
        letters[t[i]]--
    }
    return true
};

//Space: O(n)
//Time: O(n)

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'cat'))
console.log(isAnagram('een', 'tee'))