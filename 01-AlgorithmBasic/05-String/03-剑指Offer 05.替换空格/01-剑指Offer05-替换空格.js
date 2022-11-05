/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    // my solution1 使用split 和 join库函数
    // let resArr = s.split(' ');
    // return resArr.join('%20');

    // my solution2 遍历  时间复杂度：O(n)  空间复杂度：O(n)
    // let res = '';
    // for(let i = 0; i < s.length; i++) {
    //     if(s[i] === ' ') {
    //         res += '%20';
    //     }
    //     else {
    //         res += s[i];
    //     }
    // }
    // return res;

    // Carl的加法  双指针法
    // 字符串转为数组
    let strArr = Array.from(s);
    let count = 0;
    // 计算空格数量  时间复杂度：O(n)  空间复杂度：O(1)
    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i] === ' ') {
            count++;
        }
    }
    let left = strArr.length - 1;
    let right = strArr.length - 1 + count * 2;
    while(left >= 0) {
        if(strArr[left] === ' ') {
            strArr[right--] = '0';
            strArr[right--] = '2';
            strArr[right--] = '%';
            left--;
        }
        else {
            strArr[right--] = strArr[left--];
        }
    }
    // 数组转字符串
    return strArr.join('');
};
let s = "We are happy.";
console.log(replaceSpace(s));