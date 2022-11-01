/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// my solution  暴力解法：时间复杂度：O(n^2)   空间复杂度：O(1)
 var minSubArrayLen1 = function(target, nums) {
    let max = nums.length + 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= target) return 1;
        let sum = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if(sum >= target) {
                max = max >= j - i + 1 ? j - i + 1 : max
            }
        }
    }
    if(max <= nums.length) {
        return max;
    }
    else {
        return 0;
    }
};
// my solution2  滑动窗口：时间复杂度：O(n)  空间复杂度：O(1)
var minSubArrayLen2 = function(target, nums) {
    let max = nums.length + 1;
    let slowIndex = 0;
    let sum = nums[slowIndex];
    let fastIndex = 0;
    for(; fastIndex < nums.length;) {
        if(nums[fastIndex] >= target) return 1;
        if(sum >= target) {
            max = max >= fastIndex - slowIndex + 1 ? fastIndex - slowIndex + 1 : max;
            sum -= nums[slowIndex++];           
        }
        else {
            fastIndex++;
            sum += nums[fastIndex];
        }
    }
    if(max <= nums.length) {
        return max;
    }
    else {
        return 0;
    }
};
// 简化的滑动窗口：时间复杂度：O(n)  空间复杂度：O(1)
var minSubArrayLen3 = function(target, nums) {
    let max = nums.length + 1;  // 子数组最大不会超过自身
    let slowIndex = 0;
    let sum = 0;
    let fastIndex = 0;
    for(; fastIndex < nums.length; fastIndex++) {
        sum += nums[fastIndex];
        // 窗口滑动
        while(sum >= target) {
            max = max >= fastIndex - slowIndex + 1 ? fastIndex - slowIndex + 1 : max;
            sum -= nums[slowIndex++];   
        }
    }
    return max <= nums.length ? max : 0;
}



// let nums = [2,3,1,2,4,3];
let nums = [1, 4, 4];
let target = 11;
console.log(minSubArrayLen2(target, nums));