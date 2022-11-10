/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    // my solution  时间复杂度：O(n)   空间复杂度：O(n)
    // let stack = [];
    // stack.push(path[0]);
    // for(let i = 1; i < path.length; i++) {
    //     if(path[i] === '/' && stack[stack.length - 1] === '/') continue;
    //     if(path[i] === '.' && path[i + 1] === '.' && (path[i + 2] === '/' || i + 1 === path.length - 1) && path[i - 1] !== '.' && stack[stack.length - 1] === '/') {
    //         let out = stack.pop();
    //         let flag = false;
    //         while(out !== undefined && ((out === '/' && !flag) || out !== '/')) {
    //             out = stack.pop();
    //             if(out === '/') flag = !flag;
    //         }
    //         stack.push('/');
    //         i++;
    //         continue;
    //     }
    //     if(path[i] === '.' && (path[i + 1] === '/' || i === path.length - 1) && path[i - 1] !== '.' && stack[stack.length - 1] === '/') {
    //         if(i !== path.length - 1) {
    //             stack.pop();
    //         }
    //         continue;
    //     }
    //     if(path[i] === '/' && i === stack.length - 1) break;
    //     stack.push(path[i]);
    // }
    // if(stack.length > 1 && stack[stack.length - 1] === '/') stack.pop();
    // return stack.join('');

    // 官方解法  时间复杂度：O(n)   空间复杂度：O(n)
    const names = path.split('/');
    const stack = [];
    for(const name of names) {
        if(name === '..') {
            if(stack.length) {
                stack.pop();
            }
        }
        else if(name.length && name !== '.') {
            stack.push(name);
        }
    }
    return '/' + stack.join('/');
};
// let path = "/home/";
// let path = "/../";
// let path = "/home//foo/";
// let path = "/a/./b/../../c/";
// let path = "/a/../../b/../c//.//";
// let path = "/...";
// let path = "/a//b////c/d//././/..";
// let path = "/.hidden";
let path = "/hello../world";
console.log(simplifyPath(path));