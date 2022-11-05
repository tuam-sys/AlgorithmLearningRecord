/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    // 方法1：使用数组的reverse方法
    // return s.reverse();

    // 方法2：双指针法 时间复杂度：O(n / 2)
    let len = s.length;
    // 两种写法效果相同
    // for(let l = 0, r = len - 1; l < Math.floor(len / 2); l++, r--){
    for(let l = 0, r = len - 1; l < r; l++, r--){
        let t = s[l];
        s[l] = s[r];
        s[r] = t;
    }
    return s;
};
let s = ["h","e","l","l","o"];
console.log(reverseString(s));