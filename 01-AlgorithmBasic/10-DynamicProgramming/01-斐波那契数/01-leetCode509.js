/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    // my solution 同Carl的解法1  思路：动态规划   时间复杂度：O(n)   空间复杂度：O(n) 
    // let dp = [];
    // dp[0] = 0;
    // dp[1] = 1;
    // if(n < 2) return dp[n];
    // for(let i = 2; i <= n; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2];
    // }
    // return dp[n];

    // Carl的解法2  思路：动态规划   时间复杂度：O(n)   空间复杂度：O(1) 
    // if(n <= 1) return n;
    // let first = 0;
    // let second = 1;
    // for(let i = 2; i <= n; i++) {
    //     let t = first + second;
    //     first = second;
    //     second = t;
    // }
    // return second;

    // Carl的解法3  思路：递归   时间复杂度：O(2^n)  空间复杂度：O(n)，算上了编程语言中实现递归的系统栈所占空间
    if(n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};