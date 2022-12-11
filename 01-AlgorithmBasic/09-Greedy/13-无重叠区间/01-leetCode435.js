/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    //Carl的解法1  思路：贪心   按右边界排序   从左向右遍历  时间复杂度：O(nlog n) ，有一个快排
    // 空间复杂度：O(n)，有一个快排，最差情况(倒序)时，需要n次递归调用。因此确实需要O(n)的栈空间
    // intervals.sort((a, b) => a[1] - b[1]);
    // let count = 1;  // 记录非交叉区间的个数
    // let end = intervals[0][1];  // 记录区间分割点
    // for(let i = 1; i < intervals.length; i++) {
    //     if(end <= intervals[i][0]) {
    //         count++;
    //         end = intervals[i][1];
    //     }
    // }
    // return intervals.length - count;

    //Carl的解法2  思路：贪心   按左边界排序   从右向左遍历  时间复杂度：O(nlog n) ，有一个快排
    // 空间复杂度：O(n)，有一个快排，最差情况(倒序)时，需要n次递归调用。因此确实需要O(n)的栈空间
    // intervals.sort((a, b) => a[0] - b[0]);
    // let count = 1;  // 记录非交叉区间的个数
    // let end = intervals[intervals.length - 1][0];  // 记录区间分割点
    // // 倒序遍历，对单个区间来说，左边界越大越好，因为给前面区间的空间越大
    // for(let i = intervals.length - 2; i >= 0; i--) {
    //     if(end >= intervals[i][1]) {
    //         count++;
    //         end = intervals[i][0];
    //     }
    // }
    // // count 记录的是最大非重复区间的个数
    // return intervals.length - count;

    //Carl的解法3  思路：贪心   基于leetcode452-用最少数量的箭引爆气球的题解改造  时间复杂度：O(nlog n) ，有一个快排
    // 空间复杂度：O(n)，有一个快排，最差情况(倒序)时，需要n次递归调用。因此确实需要O(n)的栈空间
    // 按照 左区间遍历，或者按照右边界遍历，都可以
    intervals.sort((a, b) => a[1] - b[1]);
    intervals.sort((a, b) => a[0] - b[0]);
    let res = 1;
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] >= intervals[i - 1][1]) res++;
        else intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1]);
    }
    return intervals.length - res;
};

// let intervals = [[1,2],[2,3],[3,4],[1,3]];  // 1
// let intervals = [ [1,2], [1,2], [1,2] ];  // 2
// let intervals = [ [1,2], [2,3] ];  // 0
// let intervals = [[1,100],[11,22],[1,11],[2,12]];  // 2
// let intervals = [[0,2],[1,3],[2,4],[3,5],[4,6]];  // 2
let intervals = [[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]];
console.log(eraseOverlapIntervals(intervals));