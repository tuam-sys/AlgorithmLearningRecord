/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
    // my solution
    // if(!nums.length) return null;
    // let rootVal = Math.max(...nums);
    // let rootIndex = nums.indexOf(rootVal);
    // const root = new TreeNode(rootVal);
    // // console.log("左子树");
    // // for(let i = 0; i < rootIndex; i++) {
    // //     console.log(nums[i]);
    // // }
    // // console.log("右子树");
    // // for(let i = rootIndex + 1; i < nums.length; i++) {
    // //     console.log(nums[i]);
    // // }
    // root.left = constructMaximumBinaryTree(nums.slice(0, rootIndex));
    // root.right = constructMaximumBinaryTree(nums.slice(rootIndex + 1));
    // return root;

    // Carl的解法：数组索引法  左闭右闭区间
    function buildTree(arr, left, right) {
        if(left > right) return null;
        let maxValue = -1;
        let maxIndex = -1;
        for(let i = left; i <= right; i++) {
            if(arr[i] > maxValue) {
                maxValue = arr[i];
                maxIndex = i;
            }
        }
        let root = new TreeNode(maxValue);
        root.left = buildTree(arr, left, maxIndex - 1);
        root.right = buildTree(arr, maxIndex + 1, right);
        return root;
    }

    return buildTree(nums, 0, nums.length - 1);
};

let nums = [3,2,1,6,0,5];
// console.log(Math.max(...nums));
constructMaximumBinaryTree(nums);