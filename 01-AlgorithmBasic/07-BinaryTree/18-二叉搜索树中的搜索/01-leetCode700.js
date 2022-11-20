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
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    // my solution   递归法
    // if(root.val === val) return root;
    // if(root.val > val && root.left) return searchBST(root.left, val);
    // if(root.val < val && root.right) return searchBST(root.right, val);
    // return null;

    // Carl的解法  迭代法
    while(root) {
        if(root.val > val) {
            root = root.left;
        }
        else if(root.val < val) {
            root = root.right;
        }
        else {
            return root;
        }
    }
    return null;
};