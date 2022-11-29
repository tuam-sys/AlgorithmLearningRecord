/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    // Carl的解法1   思路：用双指针法判断是否回文
    // function isPalindrome(s, l, r) {
    //     for(let i = l, j = r; i < j; i++, j--) {
    //         if(s[i] !== s[j]) return false;
    //     }
    //     return true;
    // }

    // function backtracking(startIndex) {
    //     if(startIndex >= s.length) {
    //         res.push([...path]);
    //         return;
    //     }
    //     for(let i = startIndex; i < s.length; i++) {
    //         if(!isPalindrome(s, startIndex, i)) continue;
    //         path.push(s.slice(startIndex, i + 1));
    //         backtracking(i + 1);
    //         path.pop();
    //     }
    // }

    // let res = [];
    // let path = [];
    // backtracking(0);
    // return res;

    // Carl的解法2   思路：用动态规划法判断是否回文
    function computePalindrome(s) {
        // isPalindrome[i][j] 代表 s[i:j](双边包括)是否是回文字串
        let arr = new Array(s.length).fill(false);
        // isPalindrome = new Array(s.length).fill([...arr]);  // 这个方法是浅拷贝，不可行
        for(let i = 0; i < s.length; i++) {  // 根据字符串s, 刷新布尔矩阵的大小
            isPalindrome.push([...arr]);
        }
        // 需要倒序计算, 保证在i行时, i+1行已经计算好了
        for(let  i = s.length - 1; i >= 0; i--) {
            for(let j = i; j < s.length; j++) {
                if(j === i) isPalindrome[i][j] = true;
                else if(j - i === 1) isPalindrome[i][j] = (s[i] === s[j]);
                else isPalindrome[i][j] = (s[i] === s[j] && isPalindrome[i + 1][j - 1]);
            }
        }
    }

    function backtracking(startIndex) {
        // 如果起始位置已经大于s的大小，说明已经找到了一组分割方案了
        if(startIndex >= s.length) {
            res.push([...path]);
            return;
        }
        for(let i = startIndex; i < s.length; i++) {
            if(!isPalindrome[startIndex][i]) continue;  // 不是回文，跳过
            // 是回文子串
            path.push(s.slice(startIndex, i + 1));
            backtracking(i + 1);  // 寻找i+1为起始位置的子串
            path.pop();  // 回溯过程，弹出本次已经填在的子串
        }
    }
    
    let res = [];
    let path = [];  // 放已经回文的子串
    let isPalindrome = [];  // 放事先计算好的是否回文子串的结果
    computePalindrome(s);
    backtracking(0);
    return res;
};
let s = "aab";
let result = partition(s);
console.log(result);
let num = '@11';
console.log(parseInt(num));
let arr = [1, 2, 3];
console.log(arr.slice(0, 2));