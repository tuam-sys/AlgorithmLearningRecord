/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    // Carl的解法
    function combineHelper(n, k, startIndex, sum) {
        // 剪枝操作
        if(sum > n) return;
        if(path.length === k) {
            if(sum === n) res.push([...path]);
            return;  // 如果path.size() == k 但sum != n 直接返回
        }
        for(let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
            path.push(i);  // 处理
            sum += i;  // 处理
            combineHelper(n, k, i + 1, sum);  // 注意i+1调整startIndex
            path.pop();  // 回溯
            sum -= i;  // 回溯
        }
    }

    if(n < 3 || n > 45) return [];
    let res = [];  // 存放结果集
    let path = [];  // 符合条件的结果
    // targetSum：目标和，也就是题目中的n。
    // k：题目中要求k个数的集合。
    // sum：已经收集的元素的总和，也就是path里元素的总和。
    // startIndex：下一层for循环搜索的起始位置。
    combineHelper(n, k, 1, 0);
    return res;
};