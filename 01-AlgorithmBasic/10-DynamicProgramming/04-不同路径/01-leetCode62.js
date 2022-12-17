/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    // my solution 同Carl的二维数组动态规划解法  思路：动态规划   时间复杂度：O(m * n)   空间复杂度：O(m * n)
    // let map = Array.from(Array(m), () => Array(n).fill(1));
    // for(let i = 1; i < m; i++) {
    //     for(let j = 1; j < n; j++) {
    //         // map[i][j] 表示到达（i，j） 点的路径数
    //         map[i][j] = map[i - 1][j] + map[i][j - 1];
    //     }
    // }
    // return map[m - 1][n - 1];

    // Carl的一位数组动态规划解法   思路：动态规划   时间复杂度：O(m * n)   空间复杂度：O(n)
    // let dp = new Array(n).fill(1);
    // for(let i = 1; i < m; i++) {
    //     for(let j = 1; j < n; j++) {
    //         dp[j] += dp[j - 1];
    //     }
    // }
    // return dp[n - 1];

    // Carl的解法  超时  思路：递归（深搜）    时间复杂度：O(2^(m + n - 1) - 1)
    // function dfs(i, j) {
    //     if(i > m || j > n) return 0;  // 越界了
    //     if(i === m && j === n) return 1;  // 找到一种方法，相当于找到了叶子节点
    //     return dfs(i + 1, j) + dfs(i, j + 1);
    // }
    // return dfs(1, 1);

    // Carl的解法   下面这种求组合的方式可以AC  思路：数论    时间复杂度：O(m)    空间复杂度：O(1)
    // let numerator = 1, denominator = 1;
    // let count = m - 1;
    // let t = m + n - 2;
    // while(count--) numerator *= (t--);  // 计算分子，此时分子就会溢出
    // for(let i = 1; i <= m - 1; i++) denominator *= i;   // 计算分母
    // return numerator / denominator;

    // Carl的解法   优化求组合的方式  思路：数论    时间复杂度：O(m)    空间复杂度：O(1)
    let numerator = 1;  // 分子
    let denominator = m - 1;  // 分母
    let count = m - 1;
    let t = m + n - 2;
    while(count--) {
        numerator *= (t--);
        while(denominator !== 0 && numerator % denominator === 0) {
            numerator /= denominator;
            denominator--;
        }
    }
    return numerator;
};
console.log(uniquePaths(3, 7));