/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    // my solution    思路：声明函数判断IP段的有效性
    // function isValidNum(str) {
    //     for(let i = 0; i < str.length; i++) {
    //         if(i ===0 && str[i] === '0' && str.length > 1) return false;
    //         if(!(str[i].charCodeAt() >= '0'.charCodeAt() && str[i].charCodeAt() <= '9'.charCodeAt())) return false;
    //     }
    //     return true;
    // }
    // function backtracking(startIndex) {
    //     if(startIndex >= s.length && path.length === 4) {
    //         res.push(path.join('.'));
    //         return ;
    //     }
    //     if(path.length >= 5) return;
    //     for(let i = startIndex; i < s.length; i++) {
    //         let str = s.slice(startIndex, i + 1);
    //         if(isValidNum(str) && parseInt(str) >= 0 && parseInt(str) <= 255) path.push(str);
    //         else break;
            
    //         backtracking(i + 1);
    //         path.pop();
    //     }
    // }

    // let res = [];
    // let path = [];
    // if(s.length <= 3 || s.length >= 13) return res;
    // backtracking(0);
    // return res;

    // Carl的解法   思路：在回溯循环中判断数组的有效性
    function backtracking(startIndex) {
        if(path.length > 4) return;
        if(startIndex === s.length && path.length === 4) {
            res.push(path.join('.'));
            return;
        }
        for(let i = startIndex; i < s.length; i++) {
            const str = s.slice(startIndex, i + 1);
            if(str.length > 3 || +str > 255) break;
            if(str.length > 1 && str[0] === '0') break;
            path.push(str);
            backtracking(i + 1);
            path.pop();
        }
    }

    let res = [];
    let path = [];
    if(s.length <= 3 || s.length >= 13) return res;
    backtracking(0);
    return res;
};