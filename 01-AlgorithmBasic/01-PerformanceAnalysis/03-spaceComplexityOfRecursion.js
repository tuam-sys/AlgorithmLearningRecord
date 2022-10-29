function fibonacci(i) {  // 时间复杂度：O(2^n)  空间复杂度：O(n)
    if(i === 0) return 0;
    if(i === 1) return 1;
    return fibonacci(i - 1) + fibonacci(i - 2);
}

function fibonacci_2(first, second, n) {  // 时间复杂度：O(n)  空间复杂度：O(n)
    if(n < 0) return 0;
    if(n < 3) {
        return 1;
    } 
    else if(n === 3) {
        return first + second;
    }
    else {
        return fibonacci(second, first + second, n - 1);
    }
}

// 时间复杂度：O(logn)  
// 如果所用的语言在传递函数参数的时，是拷贝整个数值，则空间复杂度：O(nlogn)
// 如果所用的语言在传递函数参数的时，是拷贝地址，则空间复杂度：O(logn)
function binary_search(arr, l, r, x) {
    if(r >= l) {
        let mid = l + parseInt((r - l) / 2);
        // console.log(mid);
        if(arr[mid] === x) {
            return mid;
        }
        if(arr[mid] > x) {
            return binary_search(arr, l, mid - 1, x);
        }
        return binary_search(arr, mid + 1, r, x);
    }
    return -1;
}

let startTime = (new Date()).getTime();
let n = 50;
// fibonacci(n);
// n = 40, runTime = 1214
// n = 50, runTime = 160366
fibonacci_2(1, 1, n);
// n = 40, runTime = 0
// n = 50, runTime = 0
let endTime = (new Date()).getTime();
let runTime = endTime - startTime;
console.log(`n = ${n}, runTime = ${runTime}`);

// 二分查找
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = binary_search(arr, 0, 9, 5);
console.log(result);