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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    // my solution 使用层序遍历
    // if(!root.left && !root.right) return true;
    // let queue = [root];
    // while(queue.length) {
    //     let length = queue.length;
    //     for(let l = 0, r = length - 1; l <= r; l++, r--) {
    //         if((!queue[l] && queue[r]) || (queue[l] && !queue[r])) return false;
    //         if(!queue[l] && !queue[r] && queue[l].val !== queue[r].val) return false;
    //     }
    //     for(let i = 0; i < length; i++) {
    //         let node = queue.shift();
    //         if(node) {
    //             queue.push(node.left);
    //             queue.push(node.right);
    //         }
    //     }
    // }
    // return true;

    // Carl的解法1  递归判断是否为对称二叉树
    //使用递归遍历左右子树 递归三部曲
    // 1. 确定递归的参数 root.left root.right和返回值true false 
    // function compareNode(left, right) {
    //     //2. 确定终止条件 空的情况
    //     if(!left && right || left && !right) return false;
    //     else if(!left && !right) return true;
    //     else if(left.val !== right.val) return false;
    //     //3. 确定单层递归逻辑
    //     let outside = compareNode(left.left, right.right);
    //     let inside = compareNode(left.right, right.left);
    //     return outside && inside;
    // }
    // return compareNode(root.left, root.right);

    // Carl的解法2  队列实现迭代判断是否为对称二叉树
    //迭代方法判断是否是对称二叉树
    //首先判断root是否为空
    // if(!root) return true;
    // let queue = [];
    // queue.push(root.left);
    // queue.push(root.right);
    // while(queue.length) {
    //     let leftNode = queue.shift();  // 左节点
    //     let rightNode = queue.shift();  // 右节点
    //     if(!leftNode && !rightNode) continue;
    //     if(!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;
    //     queue.push(leftNode.left);  //左节点左孩子入队
    //     queue.push(rightNode.right);  //右节点右孩子入队
    //     queue.push(leftNode.right);  //左节点右孩子入队
    //     queue.push(rightNode.left);  //右节点左孩子入队
    // }
    // return true;

    // Carl的解法3  栈实现迭代判断是否为对称二叉树
    //迭代方法判断是否是对称二叉树
    //首先判断root是否为空
    if(!root) return true;
    let stack = [root.left, root.right];
    while(stack.length) {
        let rightNode = stack.pop();
        let leftNode = stack.pop();
        if(!leftNode && !rightNode) continue;
        if(!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;
        stack.push(leftNode.left);   //左节点左孩子入队
        stack.push(rightNode.right);  //右节点右孩子入队
        stack.push(leftNode.right);  //左节点右孩子入队
        stack.push(rightNode.left);  //右节点左孩子入队
    }
    return true;
};