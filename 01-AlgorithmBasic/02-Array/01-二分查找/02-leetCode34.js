// 在排序数组中查找元素的第一个和最后一个位置
/**
 * 思路：
 *  寻找target在数组里的左右边界，有如下三种情况：
 *  情况一：target 在数组范围的右边或者左边，例如数组{3, 4, 5}，target为2或者数组{3, 4, 5},target为6，此时应该返回{-1, -1}
 *  情况二：target 在数组范围中，且数组中不存在target，例如数组{3,6,7},target为5，此时应该返回{-1, -1}
 *  情况三：target 在数组范围中，且数组中存在target，例如数组{3,6,7},target为6，此时应该返回{1, 1}
 */
// 方法一：暴力破解
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange1 = function(nums, target) {
    let flag= 0;
    let left, right;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target && !flag) {
            left = i;
            flag++;
        }
        if(nums[i] === target && flag) {
            right = i;
        }
    }
    if(flag) {
        if(!right) {
            return [left, left];
        }
        return [left, right];
    }
    else{
        return [-1, -1];
    }
};

// 方法二：二分查找
var searchRange2 = function(nums, target) {
    const getLeftBorder = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let leftBorder = -2;  // 记录一下leftBorder没有被赋值的情况
        while(left <= right) {
            let mid = left + parseInt((right - left) / 2);
            if(nums[mid] >= target) {  // 寻找左边界，nums[middle] == target的时候更新right
                right = mid - 1;
                leftBorder = right;
            }
            else {
                left = mid + 1;
            }
        }
        return leftBorder;
    };

    const getRightBorder = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let rightBorder = -2;  // 记录一下rightBorder没有被赋值的情况
        while(left <= right) {
            let mid = left + parseInt((right - left) / 2);
            if(nums[mid] > target) {
                right = mid - 1;
            }
            else {  // 寻找右边界，nums[middle] == target的时候更新left
                left = mid + 1;
                rightBorder = left;
            }
        }
        return rightBorder;
    };

    let leftBorder = getLeftBorder(nums, target);
    let rightBorder = getRightBorder(nums, target);
    // 情况一
    if(leftBorder === -2 || rightBorder === -2) {
        return [-1, -1];
    }
    // 情况二
    if(rightBorder - leftBorder > 1) {
        return [leftBorder + 1, rightBorder - 1];
    }
    // 情况三
    return [-1, -1];
};

// 测试
// let nums = [5,7,7,8,8,10];
let nums = [2, 2];
let target = 2;
console.log(searchRange2(nums, target));