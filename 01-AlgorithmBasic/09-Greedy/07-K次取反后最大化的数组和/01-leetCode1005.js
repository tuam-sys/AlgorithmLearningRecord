/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
    // my solution   思路：贪心
    // let res = 0;
    // let count = 0;
    // nums.sort((a, b) => a - b);
    // for(let i = 0; i < nums.length - 1; i++) {
    //     if(nums[i] <= 0 && k > 0) {
    //         if(nums[i + 1] <= 0 || Math.abs(nums[i])  > nums[i + 1]) {
    //             res -= nums[i];
    //             k--;
    //         }
    //         else {
    //             if(k % 2 === 0) {
    //                 res += nums[i];
    //                 k = 0;
    //             }
    //             else {
                    
    //                 res -= nums[i];
    //                 k = 0;
    //             }
    //         }
    //     }
    //     else {
    //         if(k > 0) {
    //             if(k % 2 === 0) {
    //                 res += nums[i];
    //                 k = 0;
    //             }
    //             else {
    //                 res -= nums[i];
    //                 k = 0;
    //             }
    //         }
    //         else res += nums[i];
    //     }
    //     // console.log(`i=${i}, res=${res}`);
    // }
    // if(k > 0) {
    //     if(k % 2 === 0) {
    //         res += nums[nums.length - 1];
    //         k = 0;
    //     }
    //     else {
    //         res -= nums[nums.length - 1];
    //         k = 0;
    //     }
    // }
    // else res += nums[nums.length - 1];
    // return res;

    // Carl的解法1 思路：贪心
    // nums.sort((a, b) => Math.abs(b) - Math.abs(a));  // 第一步：将数组按照绝对值大小从大到小排序，注意要按照绝对值的大小
    // for(let i = 0; i < nums.length; i++) {  // 第二步：从前向后遍历，遇到负数将其变为正数，同时K--
    //     if(nums[i] < 0 && k-- > 0) {
    //         nums[i] = -nums[i];
    //     }
    // }
    // while(k-- > 0) {  // 第三步：如果K还大于0，那么反复转变数值最小的元素，将K用完
    //     nums[nums.length - 1] = -nums[nums.length - 1];
    // }
    // return nums.reduce((a, b) => a + b);  // 第四步：求和

    // Carl的解法2  思路：贪心  简化版：一次遍历
    nums.sort((a, b) => Math.abs(b) - Math.abs(a));  // 第一步：将数组按照绝对值大小从大到小排序，注意要按照绝对值的大小
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {  // 第二步：从前向后遍历，遇到负数将其变为正数，同时K--
        if(nums[i] < 0 && k-- > 0) {
            nums[i] = -nums[i];
        }
        sum += nums[i];
    }
    if(k % 2 > 0) {  // 第三步：如果K还大于0，那么反复转变数值最小的元素，将K用完
        sum -= 2 * nums[nums.length - 1];  // // 减去两倍的最小值（因为之前加过一次）
    }
    return sum;
};

// let nums = [4,2,3], k = 1;
// let nums = [3,-1,0,2], k = 3;
let nums = [2,-3,-1,5,-4], k = 2;
// let nums = [8,-7,-3,-9,1,9,-6,-9,3], k = 8;
console.log(largestSumAfterKNegations(nums, k));