/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    // Carl的解法
    function combineHelper(n, k, startIndex) {
        if(path.length === k) {
            res.push([...path]);
            return;
        }
        for(let i = startIndex; i <= n - (k - path.length) + 1; i++) {  // 优化的地方
            path.push(i);  // 处理节点 
            combineHelper(n, k, i + 1);  // 递归
            path.pop();  // 回溯，撤销处理的节点
        }
    }
    let res = [];  // 存放符合条件结果的集合
    let path = [];  // 用来存放符合条件结果
    combineHelper(n, k, 1);
    return res;
};