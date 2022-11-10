/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    // my solution  时间复杂度：O(n) 空间复杂度：O(n)
    // let stack = [];
    // let res;
    // for(let c of tokens) {
    //     if(c !== '+' && c!== '-' && c!== '*' && c!== '/') {
    //         stack.push(parseInt(c));
    //     }
    //     else {
    //         let rightNum = stack.pop();
    //         let leftNum = stack.pop();
    //         switch(c) {
    //             case '+':
    //                 res = leftNum + rightNum;
    //                 stack.push(res);
    //                 break;
    //             case '-':
    //                 res = leftNum - rightNum;
    //                 stack.push(res);
    //                 break;
    //             case '*':
    //                 res = leftNum * rightNum;
    //                 stack.push(res);
    //                 break;
    //             case '/':
    //                 res = parseInt(leftNum / rightNum);
    //                 stack.push(res);
    //                 break;
    //         }
    //     }
    // }
    // return stack.pop();

    // 代码随想录解法  思路：利用map  与我的思路相同，只是这个方法更简洁  时间复杂度：O(n) 空间复杂度：O(n)
    const s = new Map([
        ["+", (a, b) => a * 1 + b * 1],
        ["-", (a, b) => b - a],
        ["*", (a, b) => b * a],
        ["/", (a, b) => (b / a) | 0]
    ]);
    const stack = [];
    for(let i of tokens) {
        if(!s.has(i)) {
            stack.push(i);
            continue;
        }
        stack.push(s.get(i)(stack.pop(), stack.pop()));
    }
    return stack.pop();
};
// let tokens = ["2","1","+","3","*"];
// let tokens = ["4","13","5","/","+"];
let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));