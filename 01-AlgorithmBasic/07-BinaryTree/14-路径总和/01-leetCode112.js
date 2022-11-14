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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    // my solution
    // function getPathSum(node, curSum) {
    //     if(!node.left && !node.right && curSum === targetSum) return true;
    //     let left, right;
    //     if(node.left) {
    //         left = getPathSum(node.left, curSum + node.left.val);
    //     }
    //     if(node.right) {
    //         right = getPathSum(node.right, curSum + node.right.val);
    //     }
    //     return left || right;
    // }

    // if(!root) return false;
    // return !!getPathSum(root, root.val);

    // Carl的解法1 递归法：由于中间节点没有处理逻辑，所以前中后序均可
    // function traversal(node, cnt) {
    //     // 遇到叶子节点，并且计数为0
    //     if(!node.left && !node.right && cnt === 0) return true;
    //     // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
    //     if(!node.left && !node.right) return false;
    //     //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
    //     if(node.left && traversal(node.left, cnt - node.left.val)) return true;
    //     //  右（空节点不遍历）  
    //     if(node.right && traversal(node.right, cnt - node.right.val)) return true;
    //     return false; 
    // }

    // if(!root) return false;
    // return traversal(root, targetSum - root.val);

    // 代码精简版
    // if(!root) return false;
    // if(!root.left && !root.right && targetSum === root.val) return true;
    // return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);

    // Carl的解法2 迭代法：由于中间节点没有处理逻辑，所以前中后序均可
    if(!root) return false;
    let nodeStack = [root];
    let pathSumStack = [0];
    while(nodeStack.length) {
        let curNode = nodeStack.pop();
        let curPathSum = pathSumStack.pop();
        curPathSum += curNode.val;
        // 为叶子结点，且和等于目标数，返回true
        if(!curNode.left && !curNode.right && curPathSum === targetSum) return true;
        // 左节点，将当前的数值也对应记录下来
        if(curNode.left) {
            nodeStack.push(curNode.left);
            pathSumStack.push(curPathSum);
        }
        // 右节点，将当前的数值也对应记录下来
        if(curNode.right) {
            nodeStack.push(curNode.right);
            pathSumStack.push(curPathSum);
        }
    }
    return false;
};