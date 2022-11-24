/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    // my solution 思路：递归  通过切割数组分割左右区间   左闭右开区间
    // if(!nums.length) return null;
    // let rootIndex = Math.floor(nums.length / 2);
    // let root = new TreeNode(nums[rootIndex]);
    // root.left = sortedArrayToBST(nums.slice(0, rootIndex));
    // root.right = sortedArrayToBST(nums.slice(rootIndex + 1, nums.length));
    // return root;

    // Carl的解法1  思路：递归   通过数组下标分割左右区间   左闭右闭区间
    // function buildTree(arr, left, right) {
    //     if(left > right) return null;
    //     let mid = Math.floor(left + (right - left) / 2);
    //     let root = new TreeNode(arr[mid]);
    //     root.left = buildTree(arr, left, mid - 1);
    //     root.right = buildTree(arr, mid + 1, right);
    //     return root;
    // }
    // return buildTree(nums, 0, nums.length - 1);

    // Carl的解法2  思路：迭代  左闭右闭区间
    // 迭代法可以通过三个队列来模拟，一个队列放遍历的节点，一个队列放左区间下标，一个队列放右区间下标。
    if(!nums.length) return null;
    let root = new TreeNode(0);  //初始根节点
    let nodeQue = [root];  //放遍历的节点,并初始化
    let leftQue = [0];  //放左区间的下标,初始化
    let rightQue = [nums.length - 1];  // 放右区间的下标

    while(nodeQue.length) {
        let curNode = nodeQue.pop();
        let left = leftQue.pop();
        let right = rightQue.pop();
        let mid = Math.floor(left + (right - left) / 2);

        curNode.val = nums[mid];  // 将mid对应的元素给中间节点
        // 处理左区间
        if(left <= mid - 1) {
            curNode.left = new TreeNode(0);
            nodeQue.push(curNode.left);
            leftQue.push(left);
            rightQue.push(mid - 1);
        }
        // 处理右区间
        if(mid + 1 <= right) {
            curNode.right = new TreeNode(0);
            nodeQue.push(curNode.right);
            leftQue.push(mid + 1);
            rightQue.push(right);
        }
    }
    return root;
};