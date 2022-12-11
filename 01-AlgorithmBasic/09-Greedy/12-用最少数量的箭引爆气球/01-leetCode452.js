/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    // my solution  思路：贪心   时间复杂度：O(nlog n)，因为有一个快排
    // 空间复杂度：O(n)，有一个快排，最差情况(倒序)时，需要n次递归调用。因此确实需要O(n)的栈空间
    // points.sort((a, b) => a[1] - b[1]);
    // let res = 0;
    // for(let i = 0; i < points.length;) {
    //     res++;
    //     let curX = points[i][1];
    //     i++;
    //     while(i < points.length && curX >= points[i][0] && curX <= points[i][1]) {
    //         i++;
    //     }
    // }
    // return res;

    // Carl的解法  思路：贪心   时间复杂度：O(nlog n)，因为有一个快排
    // 空间复杂度：O(n)，有一个快排，最差情况(倒序)时，需要n次递归调用。因此确实需要O(n)的栈空间
    points.sort((a, b) => a[1] - b[1]);
    let res = 1;  // points 不为空至少需要一支箭
    for(let i = 1; i < points.length; i++) {
        if(points[i][0] > points[i - 1][1]) {  // 气球i和气球i-1不挨着，注意这里不是>=
            res++;  // 需要一支箭
        }
        else {  // 气球i和气球i-1挨着
            points[i][1] = Math.min(points[i][1], points[i - 1][1]);  // 更新重叠气球最小右边界
        }
    }
    return res;
};
// let points = [[10,16],[2,8],[1,6],[7,12]];
// let points = [[1,2],[3,4],[5,6],[7,8]];
let points = [[1,2],[2,3],[3,4],[4,5]];
console.log(findMinArrowShots(points));