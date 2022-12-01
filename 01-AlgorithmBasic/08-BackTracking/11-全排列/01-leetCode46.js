/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    // my solution  思路：用set去重
    // function backtracking(nums) {
    //     if(path.length === nums.length) {
    //         res.push([...path]);
    //         return;
    //     }
    //     for(let i = 0; i < nums.length; i++) {
    //         if(set.has(nums[i])) continue;
    //         path.push(nums[i]);
    //         set.add(nums[i]);
    //         backtracking(nums);
    //         path.pop();
    //         set.delete(nums[i]);
    //     }
    // }

    // let res = [];
    // let path = [];
    // let set = new Set();
    // backtracking(nums);
    // return res;

    // Carl的解法   思路：用used数组去重
    function backtracking(nums) {
        if(path.length === nums.length) {
            res.push([...path]);
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(used[i]) continue;
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
    backtracking(nums);
    return res;
};