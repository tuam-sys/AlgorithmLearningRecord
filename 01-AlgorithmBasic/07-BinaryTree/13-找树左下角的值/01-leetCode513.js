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
 var findBottomLeftValue = function(root) {
    // my solution  考虑层序遍历 记录最后一行的第一个节点
    // let queue = [root];
    // let bottomLeftValue;
    // while(queue.length && root) {
    //     let length = queue.length;
    //     for(let i = 0; i < length; i++) {
    //         let node = queue.shift();
    //         if(i === 0) bottomLeftValue = node.val;
    //         node.left && queue.push(node.left);
    //         node.right && queue.push(node.right);
    //     }
    // }
    // return bottomLeftValue;

    // Carl的解法  递归法：由于中间节点没有处理逻辑，所以前中后序均可
    //首先考虑递归遍历 前序遍历 找到最大深度的叶子节点即可
    // 1. 确定递归函数的函数参数
    function dfsTree(node, curDepth) {
        // 2. 确定递归函数终止条件
        if(!node.left && !node.right) {
            if(curDepth > maxDepth) {
                maxDepth = curDepth;
                resNode = node.val;
                // return ;
            }
        }
        // 确定单层递归的逻辑
        node.left && dfsTree(node.left, curDepth + 1);
        node.right && dfsTree(node.right, curDepth + 1);
    }

    let maxDepth = -1;
    let resNode = null;
    // 由于题目无需求出精确的最大深度，只需找到最后一行最左边的值，因此curDepth传入0或1均可
    // dfsTree(root, 0);
    dfsTree(root, 1);
    return resNode;
};