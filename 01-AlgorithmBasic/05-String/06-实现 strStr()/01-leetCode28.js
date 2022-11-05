/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    // my solution  使用search库函数
    // return haystack.search(needle);

    // my solution  暴力解法  时间复杂度：O(n*m)   
    // let slowIndex = 0;
    // let len1 = haystack.length;
    // let len2 = needle.length;
    // for(; slowIndex <= len1 - len2; slowIndex++) {
    //     if(haystack[slowIndex] === needle[0]) {
    //         let i = 1;
    //         for(; i < len2; i++) {
    //             if(haystack[slowIndex + i] !== needle[i]) break;
    //         }
    //         if(i === len2) return slowIndex;
    //     }
    // }
    // return -1;

    // Carl的解法1：KMP算法  前缀表统一减一  时间复杂度：O(n+m)
    // function getnext(needle) {
    //     let next = [];
    //     let j = -1;
    //     next.push(j);

    //     for(let i = 1; i < needle.length; i++) {
    //         while(j >= 0 && needle[i] !== needle[j + 1]) {
    //             j = next[j];
    //         }
    //         if(needle[i] === needle[j + 1]) j++;
    //         next.push(j);
    //     }
    //     return next;
    // }

    // if(needle.length === 0) return 0;
    // let next = getnext(needle);
    // let j = -1;
    // for(let i = 0; i < haystack.length; i++) {
    //     while(j >= 0 && haystack[i] !== needle[j + 1]) {
    //         j = next[j];
    //     }
    //     if(haystack[i] === needle[j + 1]) j++;
    //     if(j === needle.length - 1) return (i - needle.length + 1);
    // }
    // return -1;

    // Carl的解法2：KMP算法  前缀表统一不减一  时间复杂度：O(n+m)
    function getnext(needle) {
        let next = [];
        let j = 0;
        next.push(j);

        for(let i = 1; i < needle.length; i++) {
            while(j > 0 && needle[i] !== needle[j]) {
                j = next[j - 1];
            }
            if(needle[i] === needle[j]) j++;
            next.push(j);
        }
        return next;
    }

    if(needle.length === 0) return 0;
    let next = getnext(needle);
    let j = 0;
    for(let i = 0; i < haystack.length; i++) {
        while(j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1];
        }
        if(haystack[i] === needle[j]) j++;
        if(j === needle.length) return (i - needle.length + 1);
    }
    return -1;
};
let haystack = "sadbutsad", needle = "sad";
// let haystack = "leetcode", needle = "leeto";
console.log(strStr(haystack, needle));