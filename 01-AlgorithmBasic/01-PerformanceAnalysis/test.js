var search = function(nums, target) {
    let result = binary_search(nums, 0, nums.length - 1, target);
    console.log(result);
};
function binary_search(arr, l, r, x) {
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
let nums = [-1,0,3,5,9,12];
let target = 9;
search(nums, target);