/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // my solution
    // let ret = [];
    // let map = new Map();
    // for(let num of nums) {
    //     map.set(num, (map.get(num) || 0) + 1);
    // }
    // let i = 0;
    // let t;
    // for(; i < nums.length; i++) {
    //     map.set(nums[i], map.get(nums[i]) - 1);
    //     t = target - nums[i];
    //     if(map.get(t)) {
    //         ret.push(i);
    //         break;
    //     }
    // }
    // let a = nums[i];
    // let flag = false;
    // if(a === t) flag = true;
    // for(let j = 0; j < nums.length; j++) {
    //     if(nums[j] === t && !flag) {
    //         ret.push(j);
    //     }
    //     else if(nums[j] === t && flag) {
    //         flag = false;
    //     }
    // }
    // return ret;

    // Carl的解法  更简洁
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        else {
            map.set(nums[i], i);
        }
    }
    return [];
};
let nums = [2,7,11,15];
let target = 9;
// let nums = [3,2,4];
// let target = 6;
// let nums = [3,3];
// let target = 6;
console.log(twoSum(nums, target));
