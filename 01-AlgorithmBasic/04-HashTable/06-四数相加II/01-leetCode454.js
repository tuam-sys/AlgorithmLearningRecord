/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    // my solution
    // function getMap(nums1, nums2) {
    //     let map = new Map();
    //     for(let num1 of nums1) {
    //         for(let num2 of nums2) {
    //             let sum = num1 + num2;
    //             map.set(sum, (map.get(sum) || 0) + 1);
    //         }
    //     }
    //     return map;
    // }

    // let ret = 0;
    // let map1 = getMap(nums1, nums2);
    // let map2 = getMap(nums3, nums4);
    // for(let item of map1) {
    //     let key1 = item[0];
    //     let key2 = 0 - key1;
    //     if(map2.get(key2)) {
    //         ret += item[1] * map2.get(key2);
    //     }
    // }
    // return ret;

    // Carl的解法  与我的思路相同，但是这个方法更简洁
    let map = new Map();
    let ret = 0;
    for(let num1 of nums1) {
        for(let num2 of nums2) {
            let sum = num1 + num2;
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }

    for(let num3 of nums3) {
        for(let num4 of nums4) {
            let sum = num3 + num4;
            ret += (map.get(0 - sum) || 0);
        }
    }
    return ret;
};

let nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2];
// let nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0];
let ret = fourSumCount(nums1, nums2, nums3, nums4);
console.log(ret);
// console.log(getMap(nums1, nums2));
// console.log(getMap(nums3, nums4));