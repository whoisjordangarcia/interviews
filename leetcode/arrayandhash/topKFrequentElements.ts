/*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

// HashMap
// Scrap
{
    [1]: 3
    [2]: 2
    [3]: 1
}

// O(n) -- linear time
// Bucket sort --
// Scrap
[0 , 1 , 2 , 3 , 4 , 5 , 6]
[0, 3 , 2,  1, 0, 0, 0] = nums.length

// O(n) -- linear time
// Bucket sort - most frequent

{
    [1]: 3
    [2]: 2
    [3]: 1
}
// [0 , 1 ,  2 ,   3 , 4 , 5 , 6]
[0, [3] ,[2],  [1], 0, 0,  0] = nums.length
[1,2] = output

// Time = O(n) + (n)

Example 2:
Input: nums = [1], k = 1
Output: [1]

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    k is in the range [1, the number of unique elements in the array].
    It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

function topKFrequent(nums: number[], k: number): number[] {
    const count = {}
    const freq = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        count[num] = 1 + (count[num] || 0)
    }
    // O(n)
    // {
    //     [1]: value=3
    //     [2]: value=2
    //     [3]: value=1
    // }
    console.log(count)
    //O(n)
    for (const [n, c] of Object.entries(count)) {
        if (!freq[c as number]) {
            freq[c as number] = []
        }
        freq[c as number].push(n)
    }
    console.log('freq', freq)

    const ans = []
    //O(n)
    for (let j = freq.length - 1; j >= 0; j--) {
        if (!freq[j]) {
            continue
        }
        for(const num of freq[j]) {
            ans.push(num)
            console.log(ans)
            console.log(ans.length, k)
            if (ans.length == k) {
                return ans
            }
        }
    }
    return ans
};

// Time complexity O(n)
//  Space count=O(n) + freq=O(n) + ans=O(n)
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([1, 2], 2))

// console.log(topKFrequent([1,1,1,2,2,3], 2))