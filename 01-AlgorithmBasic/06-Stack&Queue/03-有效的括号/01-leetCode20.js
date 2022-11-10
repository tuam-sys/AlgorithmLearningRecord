/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    // my solution  思路：将所有括号压入栈  时间复杂度：O(n) 空间复杂度：O(n) 
    // let stack = [];
    // for(let c of s) {
    //     stack.push(c);
    //     if(c === ')') {
    //         stack.pop();
    //         if('(' !== stack.pop()) return false;
    //     }
    //     if(c === ']') {
    //         stack.pop();
    //         if('[' !== stack.pop()) return false;
    //     }
    //     if(c === '}') {
    //         stack.pop();
    //         if('{' !== stack.pop()) return false;
    //     }
    // }
    // return !stack.length;

    // Carl的解法1 思路：将对应左括号的有括号压入栈  代码实现更简单  时间复杂度：O(n) 空间复杂度：O(n) 
    // const stack = [];
    // for(let i = 0; i  < s.length; i++) {
    //     let c = s[i];

    //     switch(c) {
    //         case '(' :
    //             stack.push(')');
    //             break;
    //         case '[' :
    //             stack.push(']');
    //             break;
    //         case '{' :
    //             stack.push('}');
    //             break;
    //         default:
    //             if(c !== stack.pop()) {
    //                 return false;
    //             }
    //     }
    // }
    // return !stack.length;

    // Carl的解法2--解法1的简化版 思路：将所有左括号压入栈  代码实现更简单  时间复杂度：O(n) 空间复杂度：O(n) 
    const stack = [];
    const map = {"(": ")", "[": "]", "{": "}"};
    for(let c of s) {
        if(c in map) {
            stack.push(c);
            continue;
        }
        if(c !== map[stack.pop()]) return false;
    }
    return !stack.length;
};

let s = "()";
// let s = "()[]{}";
// s = "(]"
console.log(isValid(s));
