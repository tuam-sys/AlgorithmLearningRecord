/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    // my solution
    // function digitSquareSum(n) {
    //     let sum = 0;
    //     for(let i = 1000000000; i >= 10; i /= 10) {
    //         let t = Math.floor(n / i);
    //         sum += (t * t);
    //         n %= i;
    //     }
    //     sum += n * n;
    //     return sum;
    // }

    // let ret = digitSquareSum(n);
    // let map = new Map();
    // while(ret !== 1) {
    //     if(map.get(ret)) {
    //         return false;
    //     }
    //     else {
    //         map.set(ret, 1);
    //         ret = digitSquareSum(ret);
    //     }
    // }
    // return true;

    // Carl的解法1 与我的解法基本相同
    // function getSum(n) {
    //     let sum = 0;
    //     while(n) {
    //         sum += (n % 10) ** 2;
    //         n = Math.floor(n / 10);
    //     }
    //     return sum;
    // }
    
    // let map = new Map();

    // while(true) {
    //     n = getSum(n);
    //     // n出现过，证明已陷入无限循环
    //     if(map.has(n)) return false;
    //     if(n === 1) return true;
    //     map.set(n, 1);
    // }

    // // Carl的解法2 使用环形链表的思想 b相当于快指针每次走两步，a相当于慢指针，每次走一步 当b与a相等时，说明出现闭环，退出循环
    // function getSum(n) {
    //     let sum = 0;
    //     while(n) {
    //         sum += (n % 10) ** 2;
    //         n = Math.floor(n / 10);
    //     }
    //     return sum;
    // }
    // if(getSum(n) === 1) return true;
    // let a = getSum(n);
    // let b = getSum(getSum(n));
    // while(b !== 1 && getSum(b) !== 1 && a !== b) {
    //     a = getSum(a);
    //     b = getSum(getSum(b));
    // }
    // return b === 1 || getSum(b) === 1;

    // Carl的解法3 使用Set()更简洁
    // function getSum(n) {
    //     let sum = 0;
    //     while(n) {
    //         sum += (n % 10) ** 2;
    //         n = Math.floor(n / 10);
    //     }
    //     return sum;
    // }
    // let set = new Set();  // Set() 里的数是惟一的
    // // 如果在循环中某个值重复出现，说明此时陷入死循环，也就说明这个值不是快乐数
    // while(n !== 1 && !set.has(n)) {
    //     set.add(n);
    //     n = getSum(n);
    // }
    // return n === 1;

    // Carl的解法4 使用Set()，求和用reduce
    let set = new Set();
    let totalCount;
    while(totalCount !== 1) {
        let arr = ('' + (totalCount || n)).split('');
        totalCount = arr.reduce((total, num) => {
            return total += num * num;
        }, 0);
        if(set.has(totalCount)) {
            return false;
        }
        set.add(totalCount);
    }
    return true;
};

console.log(isHappy(2));