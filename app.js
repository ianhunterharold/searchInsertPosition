// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var searchInsert = function(nums, target) {
  for (let i=0; i < nums.length; i++){
    if (nums[i] === target){
      console.log("found value")
      return i
    } 
  }
    for (let j= 0; j<nums.length;j++){
        if (target === 0){
          console.log("triggered 0")
            return 0;
        } else if (nums[j] >= target ){
          console.log("triggered if else")
            return j;
        } 
    }
    return nums.length
};

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0