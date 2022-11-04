/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    /**
     *  nsum通用解法，支持2sum，3sum，4sum...等等
     *  时间复杂度分析：
     *  1. n = 2时，时间复杂度O(NlogN)，排序所消耗的时间。、
     *  2. n > 2时，时间复杂度为O(N^n-1)，即N的n-1次方，至少是2次方，此时可省略排序所消耗的时间。举例：3sum为O(n^2)，4sum为O(n^3)
     * @param {number[]} nums
     * @return {number[][]}
    */
   // nsum通用解法核心方法
    // function nSumTarget(nums, n, start, target) {
    //     let res = [];
    //     if(n === 2) {
    //         res = twoSumTarget(nums, start, target);
    //     }
    //     else {
    //         for(let i = start; i < nums.length; i++) {
    //             let subRes = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
    //             for(let j = 0; j < subRes.length; j++) {
    //                 res.push([nums[i], ...subRes[j]]);
    //             }
    //             while(nums[i] === nums[i + 1]) i++;
    //         }
    //     }
    //     return res;
    // }
    // function twoSumTarget(nums, start, target) {
    //     let res = [];
    //     let len = nums.length;
    //     let l = start;
    //     let r = len - 1;
    //     while(l < r) {
    //         let sum = nums[l] + nums[r];
    //         if(sum < target) {
    //             while(nums[l] === nums[l + 1]) l++;
    //             l++;
    //         }
    //         else if(sum > target) {
    //             while(nums[r] === nums[r - 1]) r--;
    //             r--;
    //         }
    //         else {
    //             res.push([nums[l], nums[r]]);
    //             while(nums[l] === nums[l + 1]) l++;
    //             while(nums[r] === nums[r - 1]) r--;
    //             l++;
    //             r--;
    //         }
    //     }
    //     return res;
    // }
    // nums.sort((a, b) => a - b);
    // return nSumTarget(nums, 4, 0, target);

    // Carl的解法  双指针法  时间复杂度：O(n^3)
    let res = [];
    let len = nums.length;
    if(len < 4) return res;
    nums.sort((a, b) => a - b);
    for(let i = 0; i < len - 3; i++) {
        // 去重i
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        for(let j = i + 1; j < len - 2; j++) {
            // 去重j
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1;
            let r = len - 1;
            while(l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];
                if(sum < target) {
                    l++;
                    continue;
                }
                if(sum > target) {
                    r--;
                    continue;
                }
                res.push([nums[i], nums[j], nums[l], nums[r]]);
                // 两种写法效果相同
                // while(l < r && nums[l] === nums[++l]);
                // while(l < r && nums[r] === nums[--r]);
                while(l < r && nums[l] === nums[l + 1]) l++;
                while(l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            }
        }
    }
    return res;
};

// let nums = [1,0,-1,0,-2,2], target = 0;
let nums = [2,2,2,2,2], target = 8;
console.log(fourSum(nums, target));