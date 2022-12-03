/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    // my solution   思路：使用used数组去重
    // function backtracking(nums) {
    //     // 此时说明找到了一组
    //     if(path.length === nums.length) {
    //         res.push([...path]);
    //         return;
    //     }
    //     for(let i = 0; i < nums.length; i++) {
    //         // used[i - 1] == true，说明同一树枝nums[i - 1]使用过
    //         // used[i - 1] == false，说明同一树层nums[i - 1]使用过 
    //         // 如果同一树层nums[i - 1]使用过则直接跳过
    //         if((i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) || used[i]) continue;
    //         path.push(nums[i]);
    //         used[i] = true;
    //         backtracking(nums);
    //         path.pop();
    //         used[i] = false;
    //     }
    // }

    // let res = [];
    // let path = [];
    // let used = new Array(nums.length).fill(false);
    // nums.sort((a, b) => a - b);
    // backtracking(nums);
    // return res;

    // Carl的解法  思路：使用set去重
    function backtracking(nums) {
        // 此时说明找到了一组
        if(path.length === nums.length) {
            res.push([...path]);
            return;
        }
        let set = new Set();
        for(let i = 0; i < nums.length; i++) {
            // used[i - 1] == true，说明同一树枝nums[i - 1]使用过
            // used[i - 1] == false，说明同一树层nums[i - 1]使用过 
            // 如果同一树层nums[i - 1]使用过则直接跳过
            if(set.has(nums[i])) continue;
            path.push(nums[i]);
            used[i] = true;
            set.add(nums[i]);
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