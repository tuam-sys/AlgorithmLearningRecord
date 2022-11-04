/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    // my solution  时间复杂度：O(n + m)  空间复杂度：O(n + m)
    // let s1 = new Set();
    // let retS = new Set();
    // for(let num of nums1) {
    //     s1.add(num);
    // }
    // for(let num of nums2) {
    //     if(s1.has(num)) {
    //         retS.add(num);
    //     }
    // }

    // return Array.from(retS);

    // Carl的解法，基本与我的解法相同
    // let s1 = new Set(nums1);
    // let retS = new Set();
    // // for(let num of nums2) {
    // //     s1.has(num) && retS.add(num);
    // // }
    // // 循环比迭代器快
    // for(let i = 0; i < nums2.length; i++) {
    //     s1.has(nums2[i]) && retS.add(nums2[i]);
    // }
    // return Array.from(retS);

    // 秀操作
    return Array.from(new Set(nums1.filter((i) => nums2.includes(i))));
};
// let nums1 = [1,2,2,1];
// let nums2 = [2,2];
let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];
console.log(intersection(nums1, nums2));