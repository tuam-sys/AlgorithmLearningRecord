/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    // my solution  思路：暴力解法   超时   未通过用例：963856657
    // function getDigitArr(n) {
    //     let res = [];
    //     let digit = n % 10;
    //     res.push(digit);
    //     n = parseInt(n / 10);
    //     while(n) {
    //         digit = n % 10;
    //         res.push(digit);
    //         n = parseInt(n / 10);
    //     }
    //     return res.reverse();
    // }

    // function isMonotoneIncreasing(digitArr) {
    //     let flag = true;
    //     for(let i = 1; i < digitArr.length; i++) {
    //         if(digitArr[i] < digitArr[i - 1]) {
    //             flag = false;
    //             break;
    //         }
    //     }
    //     return flag;
    // }

    // while(n) {
    //     let digitArr = getDigitArr(n);
    //     if(isMonotoneIncreasing(digitArr)) return n;
    //     n--;
    // }

    // Carl的解法1  思路：暴力解法   超时  时间复杂度：O(n × m) m为n的数字长度   空间复杂度：O(1)
    // function checkNum(n) {
    //     let max = 10;
    //     while(n) {
    //         let t = n % 10;
    //         if(max >= t) max = t;
    //         else return false;
    //         n = parseInt(n / 10);
    //     }
    //     return true;
    // }

    // for(let i = n; i > 0; i--) {
    //     if(checkNum(i)) return i;
    // }
    // return 0;

    // Carl的解法2  思路：贪心   时间复杂度：$O(n)$，n 为数字长度  
    // 空间复杂度：$O(n)$，需要一个字符串，转化为字符串操作更方便
    n = n.toString();
    n = n.split('').map(item => +item);
    // flag用来标记赋值9从哪里开始
    // 设置为这个默认值，为了防止第二个for循环在flag没有被赋值的情况下执行
    let flag = n.length;
    for(let i = flag - 1; i > 0; i--) {
        if(n[i - 1] > n[i]) {
            flag = i;
            n[i - 1] -= 1;
        }
    }
    for(let i = flag; i < n.length; i++) n[i] = 9;
    n = n.join('');
    return +n;
};
let n = 1264;
console.log(monotoneIncreasingDigits(332));