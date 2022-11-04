/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    // my solution  时间复杂度：O(n + m)  空间复杂度：O(n + m)
    let map = new Map();
    let ret = [];
    for(let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for(let num of nums2) {
        if(map.get(num)) {
            ret.push(num);
            map.set(num, map.get(num) - 1);
        }
    }
    return ret;
};
// let nums1 = [1,2,2,1];
// let nums2 = [2,2];
let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];
console.log(intersect(nums1, nums2));