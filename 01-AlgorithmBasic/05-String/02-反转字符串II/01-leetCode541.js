/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    // my solution
    // function reverseString(s) {
    //     let arr = s.split('');
    //     let len = s.length;
    //     for(let l = 0, r = len - 1; l < r; l++, r--) {
    //         let t = arr[l];
    //         arr[l] = arr[r];
    //         arr[r] = t;
    //     }
    //     return arr.join('');
    // }

    // const len = s.length;
    // let res = '';
    // let i = 0;
    // for(; i <= len; i += 2 * k) {
    //     let l = s.substring(i, i + k);
    //     res += reverseString(l);
    //     res += s.substring(i + k, i + 2 * k);
    // }
    // let curIndex = i - 2 * k;
    // let remain = len - curIndex;
    // return res;

    // Carl的解法  与我的解法思路相同，只是这个方法更简洁
    let len = s.length;
    let resArr = s.split('');
    for(let i = 0; i < len; i += 2 * k) {
        let l = i -1;
        let r = i + k > len ? len : i + k;
        while(++l < --r) [resArr[l], resArr[r]] = [resArr[r], resArr[l]];
    }
    return resArr.join('');
};
let s = "abcdefg", k = 2;
// let s = "abcd", k = 2;
console.log(reverseStr(s, k));