/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // my solution  思路：动态规划   时间复杂度：O(m * n)   空间复杂度：O(m * n)
    // let m = obstacleGrid.length;
    // let n = obstacleGrid[0].length;
    // let map = Array.from(Array(m), () => Array(n).fill(0));
    // let i = 0;
    // for(; i < n; i++) {
    //     if(!obstacleGrid[0][i]) map[0][i] = 1;
    //     else break;
    // }
    // for(; i < n; i++) map[0][i] = 0;
    // for(i = 0; i < m; i++) {
    //     if(!obstacleGrid[i][0]) map[i][0] = 1;
    //     else break;
    // }
    // for(; i < m; i++) map[i][0] = 0;
    // for(i = 1; i < m; i++) {
    //     for(let j = 1; j < n; j++) {
    //         if(obstacleGrid[i][j] === 1) {
    //             map[i][j] = 0;
    //         }
    //         else map[i][j] = map[i - 1][j] + map[i][j - 1];
    //     }
    // }
    // return map[m - 1][n - 1];

    // Carl的解法1  与我的思路基本相同，但是代码更简洁   思路：动态规划   时间复杂度：O(m * n)   空间复杂度：O(m * n)
    // let m = obstacleGrid.length;
    // let n = obstacleGrid[0].length;
    // let map = Array.from(Array(m), () => Array(n).fill(0));
    // let i = 0;
    // for(; i < n; i++) {
    //     if(!obstacleGrid[0][i]) map[0][i] = 1;
    //     else break;
    // }
    // for(i = 0; i < m; i++) {
    //     if(!obstacleGrid[i][0]) map[i][0] = 1;
    //     else break;
    // }
    // for(i = 1; i < m; i++) {
    //     for(let j = 1; j < n; j++) {
    //         if(obstacleGrid[i][j] === 1) continue;
    //         else map[i][j] = map[i - 1][j] + map[i][j - 1];
    //     }
    // }
    // return map[m - 1][n - 1];

    // Carl的解法2  一维数组   思路：动态规划   时间复杂度：O(m * n)   空间复杂度：O(n)
    // let m = obstacleGrid.length;
    // let n = obstacleGrid[0].length;
    // let dp = new Array(n).fill(0);
    // for(let i = 0; i < n && !obstacleGrid[0][i]; i++) dp[i] = 1;
    // for(let i = 1; i < m; i++) {
    //     for(let j = 0; j < n; j++) {
    //         if(obstacleGrid[i][j] === 1) dp[j] = 0;
    //         else if(j !== 0) dp[j] += dp[j - 1];
    //     }
    // }
    // return dp[n - 1];

    // Carl的解法3  内存优化，直接以原数组为dp数组   思路：动态规划   时间复杂度：O(m * n)   空间复杂度：O(1)
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(obstacleGrid[i][j] === 0) {
                // 不是障碍物
                if(i === 0) {
                    // 取左边的值
                    obstacleGrid[i][j] = obstacleGrid[i][j - 1] ?? 1;
                }
                else if(j === 0) {
                    // 取上边的值
                    obstacleGrid[i][j] = obstacleGrid[i - 1]?.[j] ?? 1;
                }
                else {
                    // 取左边和上边的和
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
                }
            }
            else {
                // 如果是障碍物，则路径为0
                obstacleGrid[i][j] = 0;
            }
        }
    }
    return obstacleGrid[m - 1][n - 1];
};
// let obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
let obstacleGrid = [[0,0]];
console.log(uniquePathsWithObstacles(obstacleGrid));