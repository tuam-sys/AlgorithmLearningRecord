/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    // my solution 思路：递归 在递归的过程中更新最小值
    // let minDiff = Infinity;
    // // let minDiff = 100000;
    // let pre = null;
    // function inOrder(root) {
    //     if(!root) return ;
    //     inOrder(root.left);
    //     if(pre) {
    //         minDiff = minDiff > Math.abs(root.val - pre.val) ? Math.abs(root.val - pre.val) : minDiff;
    //     }
    //     pre = root;
    //     inOrder(root.right);
    // }
    // inOrder(root);
    // return minDiff;

    // Carl的解法1  思路：递归 先转换为有序数组
    // let treeArr = [];
    // function dfs(root) {
    //     if(!root) return;
    //     dfs(root.left);
    //     treeArr.push(root.val);
    //     dfs(root.right);
    // }
    // dfs(root);
    // let diff = treeArr[treeArr.length - 1];
    // for(let i = 1; i < treeArr.length; i++) {
    //     diff = diff > treeArr[i] - treeArr[i - 1] ? treeArr[i] - treeArr[i - 1] : diff;
    // }
    // return diff;

    // Carl的解法2  思路：迭代 模拟中序遍历
    let stack = [];
    let cur = root;
    let pre = null;
    let res = Infinity;
    while(cur || stack.length) {
        if(cur) {
            stack.push(cur);
            cur = cur.left;
        }
        else {
            cur = stack.pop();
            if(pre) res = res > cur.val - pre.val ? cur.val - pre.val : res;
            pre = cur;
            cur = cur.right;
        }
    }
    return res;
};