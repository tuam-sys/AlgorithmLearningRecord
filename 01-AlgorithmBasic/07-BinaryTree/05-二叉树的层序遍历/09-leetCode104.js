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
 var maxDepth = function(root) {
    // 二叉树最大深度层序遍历
    // 最大的深度就是二叉树的层数
    // let queue = [];
    // queue.push(root);
    // let max = 0;
    // while(queue.length && root) {
    //     max++;
    //     let length = queue.length;
    //     for(let i = 0; i < length; i++) {
    //         let node = queue.shift();
    //         node.left && queue.push(node.left);
    //         node.right && queue.push(node.right);
    //     }
    // }
    // return max;

    // 二叉树最大深度递归遍历  后序遍历
    //使用递归的方法 递归三部曲
    //1. 确定递归函数的参数和返回值
    // function getDepth(node) {
    //     //2. 确定终止条件
    //     if(!node) return 0;
    //     //3. 确定单层逻辑
    //     let leftDepth = getDepth(node.left);
    //     let rightDepth = getDepth(node.right);
    //     let depth = 1 + Math.max(leftDepth, rightDepth);
    //     return depth;
    // }
    // 代码精简版
    // function getDepth(node) {
    //     //2. 确定终止条件
    //     if(!node) return 0;
    //     //3. 确定单层逻辑
    //     return 1 +  Math.max(getDepth(node.left), getDepth(node.right));
    // }
    // return getDepth(root);

    // 二叉树最大深度递归遍历  前序遍历
    // function getDepth(node, depth) {
    //     result = depth > result ? depth : result;  // 中
    //     if(!node.left && !node.right) return ;
    //     if(node.left) {  // 左
    //         depth++;  // 深度+1
    //         getDepth(node.left, depth);
    //         depth--;  // 回溯，深度-1
    //     }
    //     if(node.right) {  // 右
    //         depth++;  // 深度+1
    //         getDepth(node.right, depth);
    //         depth--;  // 回溯，深度-1
    //     }
    //     return ;
    // }
    // 代码精简版
    function getDepth(node, depth) {
        result = depth > result ? depth : result;  // 中
        if(!node.left && !node.right) return ;
        if(node.left) {  // 左
            getDepth(node.left, depth + 1);
        }
        if(node.right) {  // 右
            getDepth(node.right, depth + 1);
        }
        return ;
    }
    let result = 0;
    if(!root) return 0;
    getDepth(root, 1);
    return result;
};