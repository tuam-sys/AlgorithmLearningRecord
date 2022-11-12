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
 var sumOfLeftLeaves = function(root) {
    // my solution  递归法
    // function getSum(node) {
    //     if(!node.left && !node.right) return ;
    //     if(node.left && !node.left.left && !node.left.right) {
    //         res += node.left.val;
    //     }
    //     node.left && getSum(node.left);
    //     node.right && getSum(node.right);
    // }

    // let res = 0;
    // getSum(root);
    // return res;

    // Carl的解法1  递归法：后序遍历
    //采用后序遍历 递归遍历
    // 1. 确定递归函数参数
    // function nodeSum(node) {
    //     // 2. 确定终止条件
    //     if(!node) return 0;
    //     let leftValue = nodeSum(node.left);
    //     let rightValue = nodeSum(node.right);
    //     // 3. 单层递归逻辑
    //     let midValue = 0;
    //     if(node.left && !node.left.left && !node.left.right) midValue += node.left.val;
    //     let sum = midValue + leftValue + rightValue;
    //     return sum;
    // }

    // return nodeSum(root);

    // Carl的解法2  迭代法：层序遍历
    let queue = [root];
    let sum = 0;
    while(queue.length && root) {
        let node = queue.shift();
        if(node.left && !node.left.left && !node.left.right) sum += node.left.val;
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return sum;
};