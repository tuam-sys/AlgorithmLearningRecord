/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    // my solution 思路：将前n个字符挪到字符串的后面  时间复杂度：O(n)  空间复杂度：O(n)
    // let strArr = Array.from(s);
    // let right = strArr.length;
    // for(let i = 0; i < n; i++) {
    //     strArr[right++] = strArr[i];
    // }
    // // 两种方法都可以，但是第二种不需要开辟额外空间，空间复杂度：O(1)
    // // return strArr.join('').substring(n);
    // return strArr.join('').slice(n);

    //Carl的解法1  思路：将后length - n个字符挪到字符串的前面  时间复杂度：O(n)  空间复杂度：O(1)
    // let len = s.length;
    // let i = 0;
    // while(i < len - n) {
    //     s = s[len - 1] + s;
    //     i++;
    // }
    // return s.slice(0, len);

    //Carl的解法2  思路：先局部反转再整体反转  时间复杂度：O(n)  空间复杂度：O(1)
    // function reverseWords(strArr, start, end) {
    //     for(; start < end; start++, end--) {
    //         [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
    //     }
    // }

    // let strArr = Array.from(s);
    // reverseWords(strArr, 0, n - 1);
    // reverseWords(strArr, n, strArr.length - 1);
    // reverseWords(strArr, 0, strArr.length - 1);
    // return strArr.join('');

    //Carl的解法3  思路：先整体反转再局部反转  时间复杂度：O(n)  空间复杂度：O(1)
    function reverseWords(strArr, start, end) {
        for(; start < end; start++, end--) {
            [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
        }
    }

    let strArr = Array.from(s);
    reverseWords(strArr, 0, strArr.length - 1);
    reverseWords(strArr, 0, strArr.length - n - 1);
    reverseWords(strArr, strArr.length - n, strArr.length - 1);
    return strArr.join('');
};
// let s = "abcdefg", k = 2;
let s = "lrloseumgh", k = 6;
console.log(reverseLeftWords(s, k));