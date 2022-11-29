/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // Carl的解法
    function backtracking(startIndex) {
        res.push([...path]);
        if(startIndex === nums.length) {
            return;
        }
        for(let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);
            backtracking(i + 1);
            path.pop();
        }
    }

    let res = [];
    let path = [];
    backtracking(0);
    return res;
};