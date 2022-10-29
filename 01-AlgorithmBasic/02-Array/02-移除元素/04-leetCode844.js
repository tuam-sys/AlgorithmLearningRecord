//  比较含退格的字符串
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let newS = backspaceStr(s);
    let newT = backspaceStr(t);
    if(newS === newT) {
        return true;
    }
    else {
        return false;
    }
};
function backspaceStr(str) {
    let strArr = str.split('');
    let slowIndex = 0;
    for(let fastIndex = 0; fastIndex < strArr.length; fastIndex++) {
        if(strArr[fastIndex] !== '#') {
            strArr[slowIndex++] = strArr[fastIndex];
        }
        else if(slowIndex > 0){
            slowIndex--;
        }
    }
    if(slowIndex === -1) {
        return '';
    }
    else {
        strArr.length = slowIndex;
        return strArr.join('');
    }
}

// let s = "ab#c", t = "ad#c";
// let s = "ab##", t = "c#d#";
// let s = "a#c", t = "b";
let s = "y#fo##f", t = "y#f#o##f";
// console.log(backspaceStr('ad##'));
console.log(backspaceCompare(s, t));