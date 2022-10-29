//  删除排序数组中的重复项
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let slowIndex = 1;
    for(let fastIndex = 1; fastIndex < nums.length; fastIndex++) {
        if(nums[fastIndex] !== nums[fastIndex - 1]) {
            nums[slowIndex ++] = nums[fastIndex];
        }
    }
    return slowIndex;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
let len = removeDuplicates(nums);
for(let i = 0; i < len; i++) {
    console.log(nums[i]);  // [0, 1, 2, 3, 4]
}