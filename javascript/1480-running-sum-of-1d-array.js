// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

let runningSum = function(nums) {
    let results = [];
    results[0] = nums[0];
    for(let i = 1; i<nums.length; i++){
        results[i] = nums[i] + results[i-1];
    }
    return results;
};