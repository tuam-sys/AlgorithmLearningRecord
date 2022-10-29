// 有效的完全平方数
/**
 * @param {number} num
 * @return {boolean}
 */
// 二分寻找边界法
 var isPerfectSquare1 = function(num) {
    let left = 0;
    let right = num;
    let leftBorder = -1;
    while(left <= right) {
        let mid = left + parseInt((right - left) / 2);
        if(mid * mid >= num) {
            right = mid - 1;
            leftBorder = right;
        }
        else {
            left = mid + 1;
        }
    }
    if((leftBorder + 1) * (leftBorder + 1) === num) {
        return true;
    }
    else {
        return false;
    }
};
// 二分法
var isPerfectSquare2 = function(num) {
    let left = 0;
    let right = num;
    while(left <= right) {
        let mid = left + parseInt((right - left) / 2);
        if(mid * mid > num) {
            right = mid - 1;
        }
        else if(mid * mid < num) {
            left = mid + 1;
        }
        else {
            return true;
        }
    }
    return false;
};
console.log(isPerfectSquare2(16));