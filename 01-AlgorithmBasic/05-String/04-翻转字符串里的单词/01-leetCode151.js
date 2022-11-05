/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    // my solution
    // let reg = /\s+/;
    // let strArr = s.split(reg);
    // // console.log(`strArr = ${strArr}\n`);
    // strArr = strArr.filter((str) => str !== '');
    // // console.log(`newArr = ${strArr}\n`);
    // let l = 0;
    // let r = strArr.length;
    // while(l < r) {
    //     [strArr[l], strArr[r]] = [strArr[r], strArr[l]];
    //     l++;
    //     r--;
    // }
    // let res = strArr.join(' ');
    // res = res.substring(1, res.length);
    // return res;

    // Carl的解法  时间复杂度：O(n)  空间复杂度：O(1)
    // 翻转从 start 到 end 的字符
    function reverse(strArr, start, end) {
        for(; start < end; start++, end--) {
            // 交换
            [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
        }
    }
    // 删除多余空格
    function removeErtraSpaces(strArr) {
        let slowIndex = 0;
        let fastIndex = 0;
        while(fastIndex < strArr.length) {
            // 移除开始位置和重复的空格
            if(strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
                fastIndex++;
            }
            else {
                strArr[slowIndex ++] = strArr[fastIndex++];
            }
        }
        // 移除末尾空格
        strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
    }
    let strArr = Array.from(s);
    removeErtraSpaces(strArr);
    reverse(strArr, 0, strArr.length - 1);
    let start = 0;
    for(let i = 0; i <= strArr.length; i++) {
        if(strArr[i] === ' ' || i === strArr.length) {
            reverse(strArr, start, i - 1);
            start = i + 1;
        }
    }
    return strArr.join('');
};
// let s = "the sky is blue";
// let s = "  hello world  ";
let s = "a good   example";
// let s = " Folo  lC       M3brAFIMt  orQg   hzZ6ZXr4V    HLFPhuKrd   iIlUp465  HsKO       qF     agg      3DTRBSW    W5nI8f   jf8  ipv7nU     W6aRWh  tkTC       D      9cU1SNY     mt5       j      iFMWXsTV   kOgX   2N2p4Lw      RCk6S       d   HTrAP    7      DO       Zej     388Yrfbco  4Qp3   C9E y4LP9Q1t    YD3ZB QZLY    jPLDf      J     YRv   yKrGiI0R    AradFAIg       S44tFijlz iUWOgZlUv       SJ0YwuqU3l     n  9uwSAJFZ kIu    gUsc794d3X   ye Z1pBFk  45LbISTd1T  c riVy     g    J     E37    k0AT     rs   ysgvyG9Cw  wbXLC    EewjgQONX7   z4x7yJ7p      a5P       d       m    6eb8ivfj   L wjZ8km     L6AJFY     utNC  AkcL    2FfQ2k   pt11f  FZXp8mR5X  oe  l0  B wSF Uc";
let reg = /\s+/;
let arr = s.split(reg);
console.log(reverseWords(s));