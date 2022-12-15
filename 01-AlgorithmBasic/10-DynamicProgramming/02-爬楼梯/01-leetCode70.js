/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // my solution  思路：动态规划   时间复杂度：O(n)   空间复杂度：O(n)
    // let dp = [];
    // dp[1] = 1;
    // dp[2] = 2;
    // for(let i = 3; i <= n; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2];
    // }
    // return dp[n];

    // my solution  思路：动态规划   时间复杂度：O(n)   空间复杂度：O(1)
    // let first = 1;
    // let second = 2;
    // if(n === first) return first;
    // if(n === second) return second;
    // for(let i = 3; i <= n; i++) {
    //     let t = first + second;
    //     first = second;
    //     second = t;
    // }
    // return second;

    // my solution  思路：递归  超时   时间复杂度：O(2^n)  空间复杂度：O(n)，算上了编程语言中实现递归的系统栈所占空间
    // if(n <= 2) return n;
    // return climbStairs(n - 1) + climbStairs(n - 2);

    // Carl的解法  爬m阶  时间复杂度：O(n * m)   空间复杂度：O(n)
    let dp = [];
    dp[0] = 1;
    for(let i = 1; i <= n; i++) {
        dp[i] = 0;
        for(let j = 1; j <= 2; j++) {  // 把m换成2，就可以AC爬楼梯这道题
            if(i - j >= 0) dp[i] += dp[i - j];
        }
        console.log(dp[i]);
    }
    return dp[n];
};
climbStairs(5);