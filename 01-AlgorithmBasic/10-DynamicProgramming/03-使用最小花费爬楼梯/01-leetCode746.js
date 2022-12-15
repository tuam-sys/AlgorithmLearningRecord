/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    // my solution  思路：动态规划   时间复杂度：O(n)   空间复杂度：O(n)
    // let dp = [0, 0];  // 默认第一步都是不花费体力的
    // for(let i = 2; i <= cost.length; i++) {
    //     dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
    // }
    // return dp[cost.length];

    // my solution  思路：动态规划   时间复杂度：O(n)   空间复杂度：O(1)
    // let dp = [0, 0];  // 默认第一步都是不花费体力的
    // for(let i = 2; i <= cost.length; i++) {
    //     let t = Math.min(dp[0] + cost[i - 2], dp[1] + cost[i - 1]);
    //     dp[0] = dp[1];  // 记录一下前两位
    //     dp[1] = t;
    // }
    // return dp[1];

    // my solution  思路：动态规划   时间复杂度：O(n)   空间复杂度：O(n)
    // let dp = [cost[0], cost[1]];  // 默认第一步都是花费体力的
    // for(let i = 2; i < cost.length; i++) {
    //     dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
    // }
    // // 注意最后一步可以理解为不用花费，所以取倒数第一步，第二步的最少值
    // return Math.min(dp[cost.length - 1], dp[cost.length - 2]);

    // my solution  思路：动态规划   时间复杂度：O(n)   空间复杂度：O(1)
    let dp = [cost[0], cost[1]];  // 默认第一步都是花费体力的
    for(let i = 2; i < cost.length; i++) {
        let t = Math.min(dp[0], dp[1]) + cost[i];
        dp[0] = dp[1];
        dp[1] = t;
    }
    // 注意最后一步可以理解为不用花费，所以取倒数第一步，第二步的最少值
    return Math.min(dp[0], dp[1]);
};
let cost = [1,100,1,1,1,100,1,1,100,1];
minCostClimbingStairs(cost);