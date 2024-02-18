// Medium but was a hard 3 years ago
// Used from Google 

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 


// (1),2,3,4                (100)                 (200)

// Find the initial numbers by checking the left value array
// if the number (n -1) isn't in the set then that would be the initial number
// using a set helps access what values values we have in the arra
// while (n+1) == value in the set = length of sequence
// save longest sequence then identify if the next sequence is the longest.
// return the longest sequence

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109


function longestConsecutive(nums: number[]): number {
    const set = new Set(nums)
    let longest = 0
    console.log(set)
    for(const num of nums) {
        if(!set.has(num - 1)) {
            let length = 0
            while(set.has(num + length)) {
                length++
            }
            longest = Math.max(length,longest)
        }
    }
    return longest
  };

// Space: O(n)
// Time: O(n)

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([100,4,200,1,3,2]) == 4)