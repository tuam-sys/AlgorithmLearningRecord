/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    // // my solution   思路：直接用startIndex来去重
    // function backtracking(candidates, target, sum, startIndex) {
    //     if(sum === target) {
    //         res.push([...path]);
    //         return;
    //     }
    //     // 剪枝处理：sum + candidates[i] <= target
    //     for(let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
    //         //若当前元素和前一个元素相等，则本次循环结束，防止出现重复组合
    //         if(i > startIndex && candidates[i] === candidates[i - 1]) continue;
    //         path.push(candidates[i]);
    //         sum += candidates[i];
    //         backtracking(candidates, target, sum, i + 1);
    //         path.pop();
    //         sum -= candidates[i];
    //     }
    // }

    // let res = [];
    // let path = [];
    // candidates.sort((a, b) => a - b);
    // backtracking(candidates, target, 0, 0);
    // return res;

    // Carl的解法  思路：使用used数组去重
    function backtracking(candidates, target, sum, startIndex) {
        if(sum === target) {
            res.push([...path]);
            return;
        }
        for(let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
            if(i > 0 && used[i - 1] === false && candidates[i] === candidates[i - 1]) continue;
            path.push(candidates[i]);
            sum += candidates[i];
            used[i] = true;
            backtracking(candidates, target, sum, i + 1);
            path.pop();
            sum -= candidates[i];
            used[i] = false;
        }
    }

    let res = [];
    let path = [];
    let used = new Array(candidates.length).fill(false);
    candidates.sort((a, b) => a - b);
    backtracking(candidates, target, 0, 0);
    return res;
};