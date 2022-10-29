// 递归二分查找
function binary_search1(arr, l, r, x) {
    if(r >= l) {
        let mid = l + parseInt((r - l) / 2);
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
// 循环二分查找：左闭右闭  时间复杂度：O(lgn)  空间复杂度：O(1)
function binary_search2(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = left + parseInt((right - left) / 2);
        if(arr[mid] === target) {
            return mid;
        }
        if(arr[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}

// 循环二分查找：左闭右开
function binary_search3(arr, target) {
    let left = 0;
    let right = arr.length;
    while(left < right) {
        let mid = left + parseInt((right - left) / 2);
        if(arr[mid] === target) {
            return mid;
        }
        if(arr[mid] > target) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}

let arr = [-1,0,3,5,9,12];
let target = 0;
console.log(binary_search2(arr, target));
console.log(binary_search3(arr, target));