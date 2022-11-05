/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    // my solution  暴力解法  时间复杂度：O(n^2)
    // function isRepeatMatched(s, t) {
    //     let len1 = s.length;
    //     let len2 = t.length;
    //     let i = 0;
    //     for(; i < len1; i += len2) {
    //         let subStr = s.substring(i, i + len2);
    //         if(subStr === t) continue;
    //         else break;
    //     }
    //     let res = i === len1 ? true : false;
    //     return res;
    // }

    // let len = s.length;
    // let i = 1;
    // for(; (i <= Math.floor(len / 2)); i++) {
    //     if(len % i === 0) {
    //         let t = s.substring(0, i);
    //         if(isRepeatMatched(s, t)) return true;
    //     }
    // }
    // return false;

    // Carl的解法1：KMP算法  前缀表统一减一  时间复杂度：O(n)
    // function getNext(s) {
    //     let next = [];
    //     let j = -1;
    //     next.push(j);
    //     for(let i = 1; i < s.length; i++) {
    //         while(j > 0 && s[i] !== s[j + 1]) {
    //             j = next[j];
    //         }
    //         if(s[i] === s[j + 1]) j++;
    //         next.push(j);
    //     }
    //     return next;
    // }

    // let next = getNext(s);
    // if(next[next.length - 1] !== -1 && s.length % (s.length - (next[next.length - 1] + 1)) === 0) return true;
    // return false;

    // Carl的解法2：KMP算法  前缀表统一不减一  时间复杂度：O(n)
    function getNext(s) {
        let next = [];
        let j = 0;
        next.push(j);
        for(let i = 1; i < s.length; i++) {
            while(j > 0 && s[i] !== s[j]) {
                j = next[j - 1];
            }
            if(s[i] === s[j]) j++;
            next.push(j);
        }
        return next;
    }

    let next = getNext(s);
    if(next[next.length - 1] !== 0 && s.length % (s.length - next[next.length - 1]) === 0) return true;
    return false;
};
function getNext(s) {
    let next = [];
    let j = 0;
    next.push(j);
    for(let i = 1; i < s.length; i++) {
        while(j > 0 && s[i] !== s[j]) {
            j = next[j - 1];
        }
        if(s[i] === s[j]) j++;
        next.push(j);
    }
    return next;
}
let s = "abcabcabcabc";
// let s = "aba";
// let s = "ababab";
// let s = "abaababaab";
let t = "ab";
// console.log(getNext(s));
console.log(repeatedSubstringPattern(s));