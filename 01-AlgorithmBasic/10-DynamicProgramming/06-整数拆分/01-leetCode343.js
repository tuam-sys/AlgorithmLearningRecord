/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // my solution  思路：动态规划   时间复杂度：O(n)   空间复杂度：O(n)
    // let dp = [0, 0, 1, 2];
    // let numArr = [[0, 0], [0, 1], [1, 1], [2, 1]];
    // let arr = [];
    // for(let i = 4; i <= n; i++) {
    //     let first = dp[i - 2] * 2;
    //     let second = 1;
    //     let tempArr = numArr[numArr.length - 1].slice();
    //     if(tempArr[tempArr.length - 1] <= tempArr[tempArr.length - 2])
    //         tempArr[tempArr.length - 1] = tempArr[tempArr.length - 1] + 1;
    //     else tempArr[tempArr.length - 2] = tempArr[tempArr.length - 2] + 1;
    //     for(let i = 0; i < tempArr.length; i++) second *= tempArr[i];
    //     if(first >= second) {
    //         dp.push(first);
    //         arr.length = 0;
    //         for(let num of numArr[i - 2]) arr.push(num);
    //         arr.push(2);
    //         numArr.push(arr);
    //     }
    //     else {
    //         dp.push(second);
    //         numArr.push(tempArr);
    //     }
    //     // console.log(dp);
    // }
    // // console.log(numArr);
    // return dp[n];

    // Carl的解法1  思路：动态规划   时间复杂度：O(n ^ 2)   空间复杂度：O(n)
    // let dp = new Array(n + 1).fill(0);
    // dp[2] = 1;
    // for(let i = 3; i <= n; i++) {
    //     for(let j = 1; j <= i / 2; j++) {
    //         dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j);
    //     }
    // }
    // return dp[n];

    // Carl的解法2  思路：动态规划   时间复杂度：O(n)   空间复杂度：O(1)
    if(n === 2) return 1;
    if(n === 3) return 2;
    if(n === 4) return 4;
    let res = 1;
    while(n > 4) {
        res *= 3;
        n -= 3;
    }
    res *= n;
    return res;
};
console.log(integerBreak(11));