/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    // my solution  思路：贪心   时间复杂度：O(nlog n) ，有一个快排
    // 空间复杂度：O(n)，有一个快排，最差情况(倒序)时，需要n次递归调用。因此确实需要O(n)的栈空间
    // intervals.sort((a, b) => a[0] - b[0]);
    // let res = [];
    // let left = intervals[0][0];
    // let right = intervals[0][1];
    // for(let i = 1; i < intervals.length; i++) {
    //     if(intervals[i][0] > right) {
    //         res.push([left, right]);
    //         left = intervals[i][0];
    //     }
    //     right = Math.max(right, intervals[i][1]);
    // }
    // res.push([left, right]);
    // return res;

    // Carl的解法  思路：贪心   与我的解法基本相同    时间复杂度：O(nlog n) ，有一个快排
    // 空间复杂度：O(n)，有一个快排，最差情况(倒序)时，需要n次递归调用。因此确实需要O(n)的栈空间
    intervals.sort((a, b) => a[0] - b[0]);
    let pre = intervals[0];
    let res = [];
    for(let i = 0; i < intervals.length; i++) {
        let cur = intervals[i];
        if(cur[0] > pre[1]) {
            res.push(pre);
            pre = cur;
        }
        else pre[1] = Math.max(pre[1], cur[1]);
    }
    res.push(pre);
    return res;
};