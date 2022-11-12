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
    function getPathSum(node, curSum) {
        if(!node.left && !node.right && curSum === targetSum) return true;
        let left, right;
        if(node.left) {
            left = getPathSum(node.left, curSum + node.left.val);
        }
        if(node.right) {
            right = getPathSum(node.right, curSum + node.right.val);
        }
        return left || right;
    }

    if(!root) return false;
    return getPathSum(root, root.val);
};