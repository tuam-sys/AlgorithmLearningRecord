function f1On(x, n) {
    let result = 1;  // 注意：任何数的0次方都等于1
    for(let i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
}

function f2On(x, n) {
    if(n == 0) {
        return 1;  // 同样是因为0次方是等于1的
    }
    return f2On(x, n - 1) * x;
}

function f3On(x, n) {
    if(n == 0) {
        return 1;  // 同样是因为0次方是等于1的
    }
    if(n % 2 === 1) {
        return f3On(x, parseInt(n / 2)) * f3On(x, parseInt(n / 2)) * x;
    }
    return f3On(x, n / 2) * f3On(x, parseInt(n / 2));
}

function f4On(x, n) {
    if(n == 0) {
        return 1;  // 同样是因为0次方是等于1的
    }
    // console.log(`x = ${x},n = ${n}`);
    let t = f4On(x, parseInt(n / 2));  // 这里相对于funtion, 是把这个递归操作抽取出来
    if(n % 2 === 1) {
        return t * t * x;
    }
    return t * t;
}

let startTime = (new Date()).getTime();
let x = 2;
let n = 100000000;
f1On(x, n);  // x = 2,n = 100000000, runTime = 122
// console.log(f1On(x, n));
// f2On(x, n);
// f3On(x, n);
// f4On(x, n);
// console.log(f4On(2, 160));  // x = 2,n = 100000000, runTime = 0
let endTime = (new Date()).getTime();
let runTime = endTime - startTime;
console.log(`x = ${x},n = ${n}, runTime = ${runTime}`);