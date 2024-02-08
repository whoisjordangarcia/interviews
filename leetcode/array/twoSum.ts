
// Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Brute-force
// Time O(n^2) - Each element we find in the array, we try to find it's complement by loop through the rest of  the array
// Space O(1) - Space required does not depend on the size of the input array
// function twoSum(nums: number[], target: number): number[] {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// };

// One pass hash table
// Time: O(n) - We travase the list containing n elements once. Each look up on the hash table costs only O(1) time
// Space complexity: O(n) - extra space required depends on the number stored in the hash table, which stores at most n elements.
function twoSum(nums: number[], target: number): number[] {
    const map: { [number: number]: any } = {}
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map[complement] != null) {
            return [map[complement], i]
        }
        map[nums[i]] = i
    }
    return []
}


const answer = twoSum([2, 7, 11, 15], 9)
console.log(answer)