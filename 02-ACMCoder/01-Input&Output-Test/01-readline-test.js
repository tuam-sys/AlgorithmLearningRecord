//导入包
var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var readline = __readline.prompt

//下面的代码是我们需要贴到赛码网编译器的
// var line;
// let getSum = (m,n) => {
//     let sum = 0;
//     while(n) {
//         sum += m;
//         m = Math.sqrt(m);
//         n--;
//     }
//     return sum.toFixed(2) ;
// }

// while((line = read_line()) != ''){
//   let arr = line.split(' ');
//   let m = parseInt(arr[0]);
//   let n = parseInt(arr[1]);
//   let sum = getSum(m, n);
//   console.log(sum);
// }


let str1 = readline();
let str2 = readline();
let arr1 = str1.split(' ');
let arr2 = str2.split(' ');
let n = parseInt(arr1[0]);
let k = parseInt(arr1[1]);
for(let i = 0; i < arr2.length; i++) {
  arr2[i] = parseInt(arr2[i]);
}
arr2.sort((a, b) => a - b);
let i = 0, j = 1;
for(; k > 0 && i < arr2.length; i++) {
  if(arr2[i] === j) {
    j++;
    continue;
  }
  else {
    i--;
    k--;
    j++;
  }
}
// console.log(j);
while(i < arr2.length) {
  if(arr2[i] === j) {
    j++;
    i++;
  }
  else break;
}
// console.log(arr2);
console.log(j - 1);