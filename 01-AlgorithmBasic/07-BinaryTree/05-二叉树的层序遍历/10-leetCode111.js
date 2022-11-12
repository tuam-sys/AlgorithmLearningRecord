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
 var minDepth = function(root) {
    // 迭代法：
    // let queue = [root];
    // let min = 0;
    // while(queue.length && root) {
    //     min++;
    //     let length = queue.length;
    //     for(let i = 0; i < length; i++) {
    //         let node = queue.shift();
    //         // 如果左右节点都是null(在遇见的第一个leaf节点上)，则该节点深度最小
    //         if(!node.left && !node.right) return min;
    //         node.left && queue.push(node.left);
    //         node.right && queue.push(node.right);
    //     }
    // }
    // return min;

    // 递归法：后序遍历
    // function getDepth(node) {
    //     if(!node) return 0;
    //     let leftDepth = getDepth(node.left);  // 左
    //     let rightDepth = getDepth(node.right);  // 右
    //                                             // 中
    //     // 当一个左子树为空，右不为空，这时并不是最低点
    //     if(!node.left && node.right) return 1 + rightDepth;
    //     // 当一个右子树为空，左不为空，这时并不是最低点
    //     if(node.left && !node.right) return 1 + leftDepth;
    //     let result = 1 + Math.min(leftDepth, rightDepth);
    //     return result;
    // }
    // return getDepth(root);

    // 递归法：后序遍历  代码精简版
    // if(!root) return 0;
    // // 到叶子节点 返回 1
    // if(!root.left && !root.right) return 1;
    // // 只有右节点时 递归右节点
    // if(!root.left) return 1 + minDepth(root.right);
    // // 只有左节点时 递归左节点
    // if(!root.right) return 1 + minDepth(root.left);
    // return Math.min(minDepth(root.left), minDepth(root.right)) + 1;

    // 递归法：前序遍历   ********* 逻辑有问题，未实现
    function getDepth(node, depth) {
        if(!node.left && !node.right) {
            result = Math.min(result, depth);
            return;
        }
        // 中 只不过中没有处理的逻辑
        if(node.left) {  // 左
            getDepth(node.left, depth + 1);
        }
        if(node.right) {  // 右
            getDepth(node.right, depth + 1);
        }
        return;
    }
    if(!root) return 0;
    let result = 0;
    getDepth(root, 1);
    return result;
};