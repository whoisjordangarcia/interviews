// Easy
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


function isValid(s: string): boolean {
    const mapping = {
        '{': '}',
        '(': ')',
        '[': ']',
    }
    const check = []
    for (var i = 0; i < s.length; i++) {
        if (mapping[s[i]] != null) {
            check.push(s[i])
        } else if (mapping[check[check.length - 1]] == s[i]) {
            check.pop()
        } else {
            return false
        }
    }
    return check.length === 0
}

// Time O(n) = loops through that depends on the input parameters
// Space O(n) = uses stack that depends on input parameters.

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))

