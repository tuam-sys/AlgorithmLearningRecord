/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    // Carl的解法  双指针法  时间复杂度：O(n^2)
    // let ret = [];
    // const len = nums.length;
    // // 将数组排序
    // nums.sort((a, b) => a - b);
    // for(let i = 0; i < len; i++) {
    //     let l = i + 1;
    //     let r = len - 1;
    //     let iNum = nums[i];
    //     // 数组排过序，如果第一个数大于0直接返回ret
    //     if(iNum > 0) return ret;
    //     // 去重
    //     if(i > 0 && iNum === nums[i - 1]) continue;
    //     while(l < r) {
    //         let lNum = nums[l];
    //         let rNum = nums[r];
    //         let threeSum = iNum + lNum + rNum;
    //         // 三数之和小于0，则左指针向右移动
    //         if(threeSum < 0) {
    //             l++;
    //         }
    //         else if(threeSum > 0) {
    //             r--;
    //         }
    //         else {
    //             ret.push([iNum, lNum, rNum]);
    //             // 去重
    //             while(lNum === nums[l + 1]) l++;
    //             while(rNum === nums[r - 1]) r--;
    //             l++;
    //             r--;
    //         }
    //     }
    // }
    // return ret;

    // Carl的解法  哈希法  时间复杂度：O(n^2)
    let res = [];
    const len = nums.length;
    // 将数组排序
    nums.sort((a, b) => a - b);
    // 找出a + b + c = 0
    // a = nums[i], b = nums[j], c = -(a + b)
    for(let i = 0; i < len; i++) {
        // 排序之后如果第一个元素已经大于零，那么不可能凑成三元组
        if(nums[i] > 0) {
            break;
        }
        //三元组元素a去重
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let set = new Set();
        for(let j = i + 1; j < len; j++) {
            // 三元组元素b去重
            if(j > i + 2 && nums[j] === nums[j - 1] && nums[j - 1] === nums[j - 2]) continue;
            let c = 0 - (nums[i] + nums[j]);
            if(set.has(c)) {
                res.push([nums[i], nums[j], c]);
                set.delete(c);
            }
            else {
                set.add(nums[j]);
            }
        }
    }
    return res;

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
    //     // 前提：nums要先排序好
    //     let res = [];
    //     if(n === 2) {
    //         res = twoSumTarget(nums, start, target);
    //     }
    //     else {
    //         for(let i = start; i < nums.length; i++) {
    //             // 递归求(n - 1)sum
    //             let subRes = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
    //             for(let j = 0; j < subRes.length; j++) {
    //                 res.push([nums[i], ...subRes[j]]);
    //             }
    //             // 跳过相同元素
    //             while(nums[i] === nums[i + 1]) i++;
    //         }
    //     }
    //     return res;
    // }
    // function twoSumTarget(nums, start, target) {
    //     // 前提：nums要先排序好
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
    //             // 相等
    //             res.push([nums[l], nums[r]]);
    //             // 跳过相同元素
    //             while(nums[l] === nums[l + 1]) l++;
    //             while(nums[r] === nums[r - 1]) r--;
    //             l++;
    //             r--;
    //         }
    //     }
    //     return res;
    // }
    // nums.sort((a, b) => (a - b));
    // // n = 3，此时求3sum之和
    // return nSumTarget(nums, 3, 0, 0);
};
// let nums = [-1,0,1,2,-1,-4];
// let nums = [0,1,1];
let nums = [0, 0, 0];
console.log(threeSum(nums));