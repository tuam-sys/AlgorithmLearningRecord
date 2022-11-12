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
 var isBalanced = function(root) {
    // my solution 层序遍历 + 递归
    // function getHeight(node) {
    //     let queue = [node];
    //     let height = 0;
    //     while(queue.length && node) {
    //         let length = queue.length;
    //         height++;
    //         for(let i = 0; i < length; i++) {
    //             let node = queue.shift();
    //             node.left && queue.push(node.left);
    //             node.right && queue.push(node.right);
    //         }
    //     }
    //     return height;
    // }
    // if(!root) return true;
    // let leftHeight = getHeight(root.left);
    // let rightHeight = getHeight(root.right);
    // if(Math.abs(leftHeight - rightHeight) > 1) return false;
    // else {
    //     return isBalanced(node.left) && isBalanced(node.right);
    // }
    
    // Carl的解法1  迭代法：后序遍历
    // 获取当前节点的高度
    // function getHeight(curNode) {
    //     let stack = [curNode];
    //     let res = 0;
    //     let height = 0;
    //     while(stack.length && curNode) {
    //         let node = stack.pop();
    //         if(node) {
    //             height++;
    //             stack.push(node);
    //             stack.push(null);
    //             node.right && stack.push(node.right);
    //             node.left && stack.push(node.left);
    //         }
    //         else {
    //             height--;
    //             stack.pop();
    //         }
    //         res = res > height ? res : height;
    //     }
    //     return res;
    // }

    // if(!root) return true;
    // let stack = [root];
    // while(stack.length) {
    //     let node = stack.pop();
    //     if(Math.abs(getHeight(node.left) - getHeight(node.right)) > 1) return false;
    //     node.right && stack.push(node.right);
    //     node.left && stack.push(node.left);
    // }
    // return true;

    // Carl的解法2  递归法：后序遍历
    //还是用递归三部曲 + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1
    // 1. 确定递归函数参数以及返回值
    function getHeight(node) {
        // 2. 确定递归函数终止条件
        if(!node) return 0;
        // 3. 确定单层递归逻辑
        let leftDepth = getHeight(node.left);  //左子树高度
        // 当判定左子树不为平衡二叉树时,即可直接返回-1
        if(leftDepth === -1) return -1;
        let rightDepth = getHeight(node.right);  //右子树高度
        // 当判定右子树不为平衡二叉树时,即可直接返回-1
        if(rightDepth === -1) return -1;
        if(Math.abs(leftDepth - rightDepth) > 1) return -1;
        else return 1 + Math.max(leftDepth, rightDepth);
    }

    return getHeight(root) !== -1;
};