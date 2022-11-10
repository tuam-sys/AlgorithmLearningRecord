/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    // my solution  思路：使用栈  时间复杂度：O(n) 空间复杂度：O(n)
    // const stack = [];
    // for(let c of s) {
    //     if(!stack.length || c !== stack[stack.length - 1]) {
    //         stack.push(c);
    //     }
    //     else {
    //         stack.pop();
    //     }
    // }
    // return stack.join('');

    // 代码随想录解法  思路：双指针（模拟栈）  时间复杂度：O(n) 空间复杂度：O(1)
    // 原地解法（双指针模拟栈）
    s = [...s];
    let top = -1;  // 指向栈顶元素的下标
    for(let i = 0; i < s.length; i++) {
        if(top === -1 || s[i] !== s[top]) {  // top === -1 即空栈
            s[++top] = s[i];  // 入栈
        }
        else {
            top--;  // 推出栈
        }
    }
    s.length = top + 1;  // 栈顶元素下标 + 1 为栈的长度
    return s.join('');
};

let s = "abbaca";
console.log(removeDuplicates(s));