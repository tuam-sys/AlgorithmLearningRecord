/**
 * @param {number} x
 * @return {number}
 */
// 二分寻找边界法
var mySqrt1 = function(x) {
    let left = 0;
    let right = x;
    let leftBorder = -1;
    while(left <= right) {
        let mid = left + parseInt((right - left) / 2);
        if(mid * mid >= x) {
            right = mid - 1;
            leftBorder = right;
        }
        else {
            left = mid + 1;
        }
    }
    if((leftBorder + 1) * (leftBorder + 1) === x) {
        return leftBorder + 1;
    }
    else {
        return leftBorder;
    }
};

// 二分法
var mySqrt2 = function(x) {
    let left = 0;
    let right = x;
    let mid;
    while(left <= right) {
        mid = left + parseInt((right - left) / 2);
        if(mid * mid > x) {
            right = mid - 1;
        }
        else if(mid * mid < x) {
            left = mid + 1;
        }
        else {
            return mid;
        }
    }
    return right;
};
console.log(mySqrt2(3));