/*
// Easy 

// Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

Example 1:

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 

Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105
0 <= left <= right < nums.length
At most 104 calls will be made to sumRange.
*/

// [-2, 0, 3, -5, 2, -1]
// prefix
// [-2, -2, 1,-4,-2,-3]

// 0, 2
// 1

// 2, 5,
// 1 + -1 = 0

class NumArray {
  prefixSums = [];
  constructor(nums: number[]) {
    let total = 0;
    for (const num of nums) {
      total += num;
      this.prefixSums.push(total);
    }
  }
  // initialization O(n)

  sumRange(left: number, right: number): number {
    console.log(this.prefixSums);
    const rightValue = this.prefixSums[right];
    const leftValue =
    left > 0 ? this.prefixSums[left - 1] : 0;
    return rightValue - leftValue;
  }
  // eval O(1)
}

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // 1
console.log(numArray.sumRange(2, 5)); // -1
console.log(numArray.sumRange(0, 5)); // -3
