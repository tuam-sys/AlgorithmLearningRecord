/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    // my solution
    function compareNode(p, q) {
        if(!p && !q) return true;
        else if(!p || !q || p.val !== q.val) return false;
        let left = compareNode(p.left, q.left);
        let right = compareNode(p.right, q.right);
        return left && right;
    }
    return compareNode(p, q);
};