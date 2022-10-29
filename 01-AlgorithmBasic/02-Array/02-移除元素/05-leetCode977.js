//  有序数组的平方
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// my solution 暴力排序 如果是快速排序，时间复杂度是O(nlogn)
 var sortedSquares = function(nums) {
    let newNums = nums.map((item) => item * item);
    return newNums.sort((a, b) => a - b);
};
// 相向双指针法  时间复杂度是O(n)
var sortedSquares1 = function(nums) {
    let newNums = [];
    newNums.length = nums.length;
    let k = nums.length - 1;
    for(let i = 0, j = nums.length - 1; i <= j;) {
        if(nums[i] * nums[i] < nums[j] * nums[j]) {
            newNums[k--] = nums[j] * nums[j];
            j--;
        }
        else {
            newNums[k--] = nums[i] * nums[i];
            i++;
        }
    }
    return newNums;
};
// let nums = [-4,-1,0,3,10];
let nums = [-7,-3,2,3,11];
console.log(sortedSquares1(nums));