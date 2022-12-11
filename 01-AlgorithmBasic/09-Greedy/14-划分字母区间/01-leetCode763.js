/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    // my solution
    // if(s.length === 1) return [1];
    // let res = [];
    // let start = 0;
    // let str;
    // let set = new Set();
    // set.add(s[start]);
    // for(let i = 1; i < s.length; i++) {
    //     str = s.slice(i);
    //     let flag = false;
    //     // console.log(set);
    //     // console.log(`i = ${i}`);
    //     for(let c of set) {
    //         // console.log(`c = ${c}`);
    //         // console.log(`str2 = ${str}`);
    //         if(str.indexOf(c) !== -1) {
    //             flag = true;
    //             break;
    //         }
    //     }
    //     // console.log(`flag = ${flag}`);
    //     if(flag) {
    //         set.add(s[i]);
    //     }
    //     else {
    //         res.push(i - start);
    //         start = i;
    //         set.clear();
    //         set.add(s[start]);
    //     }
    // }
    // res.push(s.length - start);
    // return res;

    // Carl的解法1  思路：贪心   时间复杂度：O(n)  空间复杂度：O(1)，使用的hash数组是固定大小
    // let hash = [];
    // for(let i = 0; i < s.length; i++) {  // 统计每一个字符最后出现的位置
    //     hash[s[i]] = i;  // s[i]为字符，hash[s[i]]为字符出现的最后位置
    // }
    // let res = [];
    // let left = 0;
    // let right = 0;
    // for(let i = 0; i < s.length; i++) {
    //     right = Math.max(right, hash[s[i]]);  // 找到字符出现的最远边界
    //     if(i === right) {
    //         res.push(right - left + 1);
    //         left = i + 1;
    //     }
    // }
    // return res;

    // Carl的解法2  思路：贪心  基于leetcode435-无重叠区间的题解改造   时间复杂度：O(nlog n) ，有一个快排
    // 空间复杂度：O(n)，有一个快排，最差情况(倒序)时，需要n次递归调用。因此确实需要O(n)的栈空间
    function countLabels(s) {
        let hash = [];
        for(let i = 0; i < 26; i++) {
            hash[i] = [];
            for(let j = 0; j < 2; j++) hash[i][j] = -Infinity;
        }
        let hashFilter = [];
        // 记录每个字母出现的区间
        for(let i = 0; i < s.length; i++) {
            if(hash[s[i].charCodeAt() - 'a'.charCodeAt()][0] === -Infinity) hash[s[i].charCodeAt() - 'a'.charCodeAt()][0] = i;
            hash[s[i].charCodeAt() - 'a'.charCodeAt()][1] = i;
        }
        // 去除字符串中未出现的字母所占用区间
        for(let i = 0; i < hash.length; i++) {
            if(hash[i][0] !== -Infinity) hashFilter.push(hash[i]);
        }
        return hashFilter;
    }

    let res = [];
    // 这一步得到的 hash 即为无重叠区间题意中的输入样例格式：区间列表
    // 只不过现在我们要求的是区间分割点
    let hash = countLabels(s);
    // 按照左边界从小到大排序
    hash.sort((a, b) => a[0] - b[0]);
    // 记录最大右边界
    let rightBoard = hash[0][1];
    let leftBoard = 0;
    for(let i = 1; i < hash.length; i++) {
        if(hash[i][0] > rightBoard) {
            res.push(rightBoard - leftBoard + 1);
            leftBoard = hash[i][0];
        }
        rightBoard = Math.max(rightBoard, hash[i][1]);
    }
    // 最右端
    res.push(rightBoard - leftBoard + 1);
    return res;
};

let s = "ababcbacadefegdehijhklij";
// let s = "eccbbbbdec";
// let s = "ababcbacad";
// let str1 = s.slice(0, 2);
// let str2 = s.slice(2);
// console.log(str1);
// console.log(str2);
console.log(partitionLabels(s));