/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    // my solution  思路：贪心
    // if(nums.indexOf(0) === -1 || nums.length === 1) return true;
    // let maxStep = 0;
    // for(let i = 0; i < nums.length; i++) {
    //     let curStep = i + nums[i];
    //     maxStep = Math.max(maxStep, curStep);
    //     console.log(i);
    //     if(maxStep >= nums.length - 1) return true;
    //     if(!nums[i] && maxStep === i) return false;
    // }

    // Carl的解法   思路：贪心  与我的思路基本相同
    if(nums.length === 1) return true;  // 如果只有一个元素，那么必定到达
    let cover = 0;
    for(let i = 0; i <= cover; i++) {  // i表示下标，当前只能够走cover步
        cover = Math.max(i + nums[i], cover);
        if(cover >= nums.length - 1) return true;  // 说明可以覆盖到终点，直接返回
    }
    return false;  // 如果上面没有返回就是跳不到
};
// let nums = [2,3,1,1,4];
let nums = [3,2,1,0,4];
// console.log(nums.indexOf(1));
// nums = nums.splice(2, nums.length);
// console.log(nums);
console.log(canJump(nums));