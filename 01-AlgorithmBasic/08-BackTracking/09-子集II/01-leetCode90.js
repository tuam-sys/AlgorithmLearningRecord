/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    // my solution  思路：利用数组下标去重
    // function backtracking(nums, startIndex) {
    //     res.push([...path]);
    //     if(startIndex === nums.length) return;
    //     for(let i = startIndex; i < nums.length; i++) {
    //         if(i > startIndex && nums[i] === nums[i - 1]) continue;
    //         path.push(nums[i]);
    //         backtracking(nums, i + 1);
    //         path.pop();
    //     }
    // }

    // let res = [];
    // let path = [];
    // nums.sort((a, b) => a - b);  // 去重需要排序
    // backtracking(nums, 0);
    // return res;

    // Carl的解法1  思路：利用used数组去重
    // function backtracking(nums, startIndex) {
    //     res.push([...path]);
    //     if(startIndex === nums.length) return;
    //     for(let i = startIndex; i < nums.length; i++) {
            // used[i - 1] == true，说明同一树枝candidates[i - 1]使用过
            // used[i - 1] == false，说明同一树层candidates[i - 1]使用过
            // 而我们要对同一树层使用过的元素进行跳过
    //         if(i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue;
    //         path.push(nums[i]);
    //         used[i] = true;
    //         backtracking(nums, i + 1);
    //         used[i] = false;
    //         path.pop();
    //     }
    // }

    // let res = [];
    // let path = [];
    // let used = new Array(nums.length).fill(false);
    // nums.sort((a, b) => a - b);  // 去重需要排序
    // backtracking(nums, 0);
    // return res;

    // Carl的解法2  思路：利用set去重
    function backtracking(nums, startIndex) {
        res.push([...path]);
        if(startIndex === nums.length) return;
        let set = new Set();
        for(let i = startIndex; i < nums.length; i++) {
            if(set.has(nums[i])) continue;
            path.push(nums[i]);
            set.add(nums[i]);
            backtracking(nums, i + 1);
            used[i] = false;
            path.pop();
        }
    }

    let res = [];
    let path = [];
    let used = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);  // 去重需要排序
    backtracking(nums, 0);
    return res;
};