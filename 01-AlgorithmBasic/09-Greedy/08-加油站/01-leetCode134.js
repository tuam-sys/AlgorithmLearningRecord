/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    // my solution  通过率：35/37   时间复杂度：O(n^2)  超时
    // let diffArr = [];
    // let maxDiff = -Infinity;
    // let index;
    // let sum = 0;
    // for(let i = 0; i < gas.length; i++) {
    //     let diff = gas[i] - cost[i];
    //     diffArr.push(diff);
    //     if(diff > maxDiff) {
    //         maxDiff = diff;
    //         index = i;
    //     }
    //     sum += diff;
    // }
    // if(sum >= 0) {
    //     for(let i = 0; i < gas.length; i++) {
    //         let sum = diffArr[i];
    //         if(sum < 0) continue;
    //         let j = 1;
    //         for(; j < gas.length; j++) {
    //             let idx = (i + j) % gas.length;
    //             sum += diffArr[idx];
    //             if(sum < 0) break;
    //         }
    //         if(j === gas.length) return i;
    //     }
    // }
    // else return -1;

    // Carl的解法1 思路：暴力解法  时间复杂度：O(n^2)   空间复杂度：O(1)
    // for(let i = 0; i < gas.length; i++) {
    //     let rest = gas[i] - cost[i];  // 记录剩余油量
    //     index = (i + 1) % gas.length;
    //     while(rest > 0 && index !== i) {  // 模拟以i为起点行驶一圈
    //         rest += gas[index] - cost[index];
    //         index = (index + 1) % gas.length;
    //     }
    //     如果以i为起点跑一圈，剩余油量>=0，返回该起始位置
    //     if(rest >= 0 && index === i) return i;
    // }
    // return -1;

    // Carl的解法2 思路：贪心（直接从全局进行贪心选择）  时间复杂度：O(n)   空间复杂度：O(1)
    // let curSum = 0;
    // let min = Infinity;  // 从起点出发，油箱里的油量最小值
    // for(let i = 0; i < gas.length; i++) {
    //     curSum += gas[i] - cost[i];
    //     min = min < curSum ? min : curSum;
    // }
    // if(curSum < 0) return -1;  // 情况一：如果gas的总和小于cost总和，那么无论从哪里出发，一定是跑不了一圈的
    // if(min >= 0) return 0;  // 情况二：rest[i] = gas[i]-cost[i]为一天剩下的油，i从0开始计算累加到最后一站，如果累加没有出现负数，说明从0出发，油就没有断过，那么0就是起点
    // for(let i = gas.length - 1; i >= 0; i--) {  // 情况三：如果累加的最小值是负数，汽车就要从非0节点出发，从后向前，看哪个节点能这个负数填平，能把这个负数填平的节点就是出发节点。
    //     min += gas[i] - cost[i];
    //     if(min >= 0) return i;
    // }
    // return -1;  // 不加也行

    // Carl的解法3 思路：贪心（局部最优退出全局最优）  时间复杂度：O(n)   空间复杂度：O(1)
    let curSum = 0;
    let totalSum = 0;
    let start = 0;
    for(let i = 0; i < gas.length; i++) {
        curSum += gas[i] - cost[i];
        totalSum += gas[i] - cost[i];
        if(curSum < 0) {  // 当前累加rest[i]和 curSum一旦小于0
            curSum = 0;  // curSum从0开始
            start = i + 1;  // 起始位置更新为i+1
        }
    }
    if(totalSum < 0) return -1;  // 说明怎么走都不可能跑一圈了
    return start;
};

let gas = [1,2,3,4,5], cost = [3,4,5,1,2];
// let gas = [5,8,2,8], cost = [6, 5, 6, 6];
console.log(canCompleteCircuit(gas, cost));