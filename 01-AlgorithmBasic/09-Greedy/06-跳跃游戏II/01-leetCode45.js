/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    // Carl的解法1  思路：贪心
    // if(nums.length === 1) return 0;
    // let res = 0;  // 记录走的最大步数
    // let curDistance = 0;  // 当前覆盖最远距离下标
    // let nextDistance = 0;  // 下一步覆盖最远距离下标
    // for(let i = 0; i < nums.length; i++) {  
    //     nextDistance = Math.max(nextDistance, i + nums[i]);  // 更新下一步覆盖最远距离下标
    //     if(i === curDistance) {  // 遇到当前覆盖最远距离下标
    //         if(curDistance !== nums.length - 1) {  // 如果当前覆盖最远距离下标不是终点
    //             curDistance = nextDistance;  // 需要走下一步
    //             res++;  // 需要走下一步
    //             if(nextDistance >= nums.length - 1) break;  // 下一步的覆盖范围已经可以达到终点，结束循环
    //         }
    //         else break;  // 当前覆盖最远距离下标是集合终点，不用做ans++操作了，直接结束
    //     }
    // }
    // return res;

    // Carl的解法2  思路：贪心  简化版
    if(nums.length === 1) return 0;
    let res = 0;  // 记录走的最大步数
    let curDistance = 0;  // 当前覆盖最远距离下标
    let nextDistance = 0;  // 下一步覆盖最远距离下标
    for(let i = 0; i < nums.length - 1; i++) {  // 注意这里是小于nums.length - 1，这是关键所在
        nextDistance = Math.max(nextDistance, i + nums[i]);  // 更新下一步覆盖的最远距离下标
        if(i === curDistance) {  // 遇到当前覆盖的最远距离下标
            curDistance = nextDistance;  // 更新当前覆盖的最远距离下标
            res++;
        }
    }
    return res;
};
// let nums = [2,3,1,1,4];
// let nums = [2,3,0,1,4];
// let nums = [1,2,1,1,1]; // 3
// let nums = [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3];   // 2
// let nums = [1, 2];
// let nums = [1, 1, 1, 1];
console.log(jump(nums));