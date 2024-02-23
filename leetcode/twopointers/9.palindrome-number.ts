/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    const str = x.toString().split('')
    let left =0
    let right = str.length -1
    while(left < right) {
        console.log(str[left], str[right])
        if(str[left] != str[right]) {
            return false
        }
        right--
        left++
    }
    return true
};
// @lc code=end


console.log(isPalindrome(121) == true)
console.log(isPalindrome(10) == false)
console.log(isPalindrome(-100) == false)
