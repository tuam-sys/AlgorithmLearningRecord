/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    // Carl的解法  思路：贪心  时间复杂度：O(nlog n + n^2)   空间复杂度：O(n)
    // 身高从大到小排（身高相同k小的站前面）
    people.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        return b[0] - a[0];
    });
    let queue = [];
    for(let i = 0; i < people.length; i++) {
        queue.splice(people[i][1], 0, people[i]);  // 插入到下标为people[i][1]的位置
    }
    return queue;
};
let people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]];
people.sort((a, b) => (a[0] - b[0]));
console.log(people);
arr = [];
arr.splice(2, 0, 2);
console.log(arr[1]);