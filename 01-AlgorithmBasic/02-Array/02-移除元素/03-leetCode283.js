// 移动零
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let slowIndex = 0;
    for(let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if(nums[slowIndex] === 0 && nums[fastIndex] !== 0) {
            let t = nums[slowIndex];
            nums[slowIndex] = nums[fastIndex];
            nums[fastIndex] = t;
            slowIndex++;
        }
        else if(nums[slowIndex] !== 0 && nums[fastIndex] !== 0){
            nums[slowIndex++] = nums[fastIndex];
        }
    }
};

let nums = [1, 0, 1];  // [1, 1, 0]
// let nums = [0,1,0,3,12];  // [1, 3, 12, 0, 0]
moveZeroes(nums);
console.log(nums);