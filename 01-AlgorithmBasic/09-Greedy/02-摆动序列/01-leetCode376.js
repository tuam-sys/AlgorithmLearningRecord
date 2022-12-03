/**
 * @param {number[]} nums
 * @return {number}
 */
 var wiggleMaxLength = function(nums) {
    // 时间复杂度：O(n)
    // 空间复杂度：O(1)
    // my solution    思路：贪心  用一个布尔值表示前一个差值的正负
    // if(nums.length === 1 || (nums.length === 2 && nums[0] !== nums[1])) return nums.length;
    // if(nums.length === 2 && nums[0] === nums[1]) return 1;
    // let res = 1;
    // let flag;
    // let fast = 1;
    // let slow = 0;
    // while(nums[fast] === nums[fast - 1]) fast++;
    // if(nums[fast] > nums[slow]) flag = true;
    // else if(nums[fast] < nums[slow]) flag = false;
    // for(slow = fast, fast++; fast < nums.length; fast++, slow++) {
    //     if((nums[fast] > nums[slow] && !flag) || (nums[fast] < nums[slow] && flag)) {
    //         flag = !flag;
    //         res++;
    //     }
    // }
    // if(flag !== undefined) res++;
    // return res;

    // Carl的解法1  思路：贪心  用一个变量表示前一个差值    时间复杂度：O(n)  空间复杂度：O(1)
    // if(nums.length <= 1) return nums.length;
    // let res = 1;
    // let preDiff = 0;
    // let curDiff = 0;
    // for(let i = 0; i < nums.length - 1; i++) {
    //     curDiff = nums[i + 1] - nums[i];
    //     if((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
    //         res++;
    //         preDiff = curDiff;
    //     }
    // }
    // return res;

    // Carl的解法2  思路：动态规划  时间复杂度：O(n^2)   空间复杂度：O(n)
    // const length = nums.length;
    // if(length <= 1) return length;
    // let dp = new Array(length).fill(0).map(() => []);
    // dp[0][0] = 1;  // 第一个数作为波峰
    // dp[0][1] = 1;  // 第一个数作为波谷
    // for(let i = 1; i < length; i++) {
    //     dp[i][0] = 1;
    //     dp[i][1] = 1;
    //     for(let j = 0; j < i; j++) {
    //         if(nums[j] < nums[i]) dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
    //     }
    //     for(let j = 0; j < i; j++) {
    //         if(nums[j] > nums[i]) dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
    //     }
    // }
    // return Math.max(dp[length - 1][0], dp[length - 1][1]);

    // Carl的解法3  思路：动态规划（简化版）  时间复杂度：O(n)   空间复杂度：O(n)
    if(nums.length <= 1) return nums.length;
    // 考虑前i个数，当第i个值作为峰谷时的情况（则第i-1是峰顶）
    let down = 1;
    // 考虑前i个数，当第i个值作为峰顶时的情况（则第i-1是峰谷）
    let up = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i - 1]) down = Math.max(up + 1, down);
        if(nums[i] > nums[i - 1]) up = Math.max(up, down + 1);
    }
    return Math.max(up, down);
};