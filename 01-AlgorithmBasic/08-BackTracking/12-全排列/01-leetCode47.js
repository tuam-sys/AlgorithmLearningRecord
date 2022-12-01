/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    // my solution   思路：使用used数组去重
    function backtracking(nums) {
        if(path.length === nums.length) {
            res.push([...path]);
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if((i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) || used[i]) continue;
            path.push(nums[i]);
            used[i] = true;
            backtracking(nums);
            path.pop();
            used[i] = false;
        }
    }

    let res = [];
    let path = [];
    let used = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);
    backtracking(nums);
    return res;
};