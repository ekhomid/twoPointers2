/*
Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.
*/

function removeDuplicates(nums) {
    
    if (nums.length === 1) 
      return nums;

    let l = 0;
    let r = 1;

    while (r < nums.length) {
      if (nums[l] == nums[r]) {
        r++; 
      } else {
        l++;
        nums[l] = nums[r];
        r++;
      }
    }

    return nums.slice(0, l + 1); 
}

let nums = [1];

console.log(removeDuplicates(nums));