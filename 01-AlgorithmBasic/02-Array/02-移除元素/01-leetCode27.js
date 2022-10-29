// 移除元素
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// my solution  与相向双指针法类似
 var removeElement = function(nums, val) {
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        if(nums[i] === val) {  // 发现需要移除的元素，就将数组集体向前移动一位
            nums[i] = nums[len - 1];
            len--;  // 此时数组的大小-1
            i--;  // 因为下标i以后的数值都向前移动了一位，所以i也向前移动一位
        }
    }
    return len;
};
// 方法一：暴力解法  时间复杂度：O(n^2)   空间复杂度：O(1)
var removeElement1 = function(nums, val) {
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        if(nums[i] === val) {  // 发现需要移除的元素，就将数组集体向前移动一位
            for(let j = i + 1; j < len; j++) {
                nums[j - 1] = nums[j];
            }
            len--;  // 此时数组的大小-1
            i--;  // 因为下标i以后的数值都向前移动了一位，所以i也向前移动一位
        }
    }
    return len;
};
// 方法二：快慢双指针法  时间复杂度：O(n)   空间复杂度：O(1)  不改变元素的相对位置
 var removeElement2 = function(nums, val) {
    let slowIndex = 0;
    for(let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if(nums[fastIndex] !== val) {
            nums[slowIndex++] = nums[fastIndex];
        }
    }
    return slowIndex;
};
// 方法三：相向双指针法  时间复杂度：O(n)   空间复杂度：O(1)  改变元素的相对位置
var removeElement3 = function(nums, val) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    while(leftIndex <= rightIndex) {
        // 找左边等于val的元素
        while(leftIndex <= rightIndex && nums[leftIndex] !== val) {
            leftIndex++;
        }
        // 找右边不等于val的元素
        while(leftIndex <= rightIndex && nums[rightIndex] === val) {
            rightIndex--;
        }
        // 将右边不等于val的元素覆盖左边等于val的元素
        if(leftIndex < rightIndex) {
            nums[leftIndex++] = nums[rightIndex--];
        }
    }
    // 将右边不等于val的元素覆盖左边等于val的元素
    return leftIndex;
};