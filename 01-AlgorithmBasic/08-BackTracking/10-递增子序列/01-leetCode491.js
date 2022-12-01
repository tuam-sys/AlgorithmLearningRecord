/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var findSubsequences = function(nums) {
    // Carl的解法1  思路：用set去重
    // function backtracking(nums, startIndex) {
    //     if(path.length >= 2) res.push([...path]);
    //     if(startIndex >= nums.length) return;
    //     let set = new Set();
    //     for(let i = startIndex; i < nums.length; i++) {
    //         if((path.length && nums[i] < path[path.length - 1]) || set.has(nums[i])) continue;
    //         set.add(nums[i]);
    //         path.push(nums[i]);
    //         backtracking(nums, i + 1);
    //         path.pop();
    //     }
    // }

    // let res = [];
    // let path = [];
    // backtracking(nums, 0);
    // return res;

    // Carl的解法2  思路：用数组做哈希表去重
    function backtracking(nums, startIndex) {
        if(path.length >= 2) res.push([...path]);
        if(startIndex >= nums.length) return;
        let used = new Array(201).fill(false);
        for(let i = startIndex; i < nums.length; i++) {
            if((path.length && nums[i] < path[path.length - 1]) || used[nums[i] + 100]) continue;
            used[nums[i] + 100] = true;
            path.push(nums[i]);
            backtracking(nums, i + 1);
            path.pop();
        }
    }

    let res = [];
    let path = [];
    backtracking(nums, 0);
    return res;
};