/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    // my solution   思路：利用map做映射
    // function combineHelper(digits, startIndex) {
    //     if(path.length === digits.length) {
    //         res.push(path.join(''));
    //         return;
    //     }
    //     let str = map.get(digits[startIndex]);
    //     for(let i = 0; i < str.length; i++) {
    //         path.push(str[i]);
    //         combineHelper(digits, startIndex + 1);
    //         path.pop();
    //     }
    // }

    // if(!digits.length) return [];
    // let arr = [['2', 'abc'], ['3', 'def'], ['4', 'ghi'], ['5', 'jkl'], ['6', 'mno'], ['7', 'pqrs'], ['8', 'tuv'], ['9', 'wxyz']];
    // let map = new Map();
    // for(let item of arr) {
    //     map.set(item[0], item[1]);
    // }
    // let res = [];
    // let path = [];
    // combineHelper(digits, 0);
    // return res;

    // Carl的解法   思路：利用二维数组做映射
    function backtracking(digits, index) {
        if(digits.length === index) {
            res.push(path.join(''));
            return;
        }
        for(let v of map[digits[index]]) {
            path.push(v);
            backtracking(digits, index + 1);
            path.pop();
        }
    }

    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    if(!digits.length) return [];
    if(digits.length === 1) return map[digits].split('');
    let res = [];
    let path = [];
    backtracking(digits, 0);
    return res;
};


let arr = [['2', 'abc'], ['3', 'def'], ['4', 'ghi'], ['5', 'jkl'], ['6', 'mno'], ['7', 'pqrs'], ['8', 'tuv'], ['9', 'wxyz']];
let map = new Map();
for(let item of arr) {
    map.set(item[0], item[1]);
}
console.log(map);