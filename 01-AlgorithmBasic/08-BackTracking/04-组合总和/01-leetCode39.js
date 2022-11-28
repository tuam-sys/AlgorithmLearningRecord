/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    // my solution   回溯结果集需要去重
    // function backtracking(candidates, target, sum) {
    //     if(sum > target) return;
    //     if(sum === target) {
    //         res.push([...path]);
    //         return;
    //     }
    //     for(let i = 0; i < candidates.length; i++) {
    //         path.push(candidates[i]);
    //         sum += candidates[i];
    //         backtracking(candidates, target, sum);
    //         path.pop();
    //         sum -= candidates[i];
    //     }
    // }

    // let res = [];
    // let path = [];
    // backtracking(candidates, target, 0);
    // let set = new Set();
    // let newRes = [];
    // for(let item of res) {
    //     item.sort((a, b) => a - b);
    //     if(!set.has(item.join(''))) {
    //         newRes.push([...item]);
    //         set.add(item.join(''));
    //     }
    // }
    // return newRes;

    // Carl的解法  回溯结果集不需要去重
    function backtracking(candidates, target, sum, startIndex) {
        if(sum === target) {
            res.push([...path]);
            return;
        }
        // 剪枝处理：sum + candidates[i] <= target
        for(let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
            path.push(candidates[i]);
            sum += candidates[i];
            backtracking(candidates, target, sum, i);
            path.pop();
            sum -= candidates[i];
        }
    }

    let res = [];
    let path = [];
    candidates.sort((a, b) => a - b);
    backtracking(candidates, target, 0, 0);
    return res;
};