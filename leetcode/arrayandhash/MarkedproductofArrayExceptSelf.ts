/*
// Medium
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]

currentIndex = (nums[i])

[x] , 1 == 2x3x4 = 24
[24,x], 2 == 1x3x4 = 12
[24,12,x], 3 == 1x2x4 = 8
[24,12,8, x], 4 == 1x2x3 = 6
[24,12,8,6]

for(var x)
    for(var j)

O(n^2)

/ with division operation
/ 24/1=24 ,24/2=12, 24/3=8, 24/4=6

let calc = 0
for n
    calc = n * calc

let ans = []
for n 
    ans.push(calc / n)


/ prefix + postfix

prefix --> 1,2,3,4
postfix 1,2,3,4 <--- 

prefix = 1,1,2,6
1,2,3,4
--> output[1,2,6,24]

postfix = 1,4
 1,2,3,4] <--
[      ,24]

// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/

function productExceptSelf(nums: number[]): number[] {
    const output = Array(nums.length).fill(1)
    let prefix = 1
    for(const [index,num] of nums.entries()) {
        output[index] = prefix;
        prefix *= num
    }
    let postfix = 1
    for(let i = nums.length - 1; i >=0; i--) {
        output[i] *= postfix
        postfix *= nums[i]
    }
    return output
};

console.log(productExceptSelf([1,2,3,4]))
