/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.42%)
 * Likes:    23390
 * Dislikes: 1652
 * Total Accepted:    4.3M
 * Total Submissions: 10.7M
 * Testcase Example:  '"()"'
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "(]"
 * Output: false
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 * 
 * 
 */

// @lc code=start

function isValid(s: string): boolean {
    let stack = []
    const map = {
        "{":"}",
        "[":"]",
        "(":")"
    }
    for(var i = 0; i < s.length; i++) {
        const bracket = s[i]
        
        if(map[bracket] != null) {
            stack.push(bracket)
        } else if(map[stack[stack.length -1]] == bracket) {
            stack.pop()
        } else {
            return false
        }
    }
    console.log(stack)
    return stack.length === 0
};
// @lc code=end

