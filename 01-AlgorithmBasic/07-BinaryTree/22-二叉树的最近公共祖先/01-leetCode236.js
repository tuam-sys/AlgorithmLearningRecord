/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    // Carl的解法  递归：后序遍历  实现自底向上查找   独立的递归函数
    // 使用递归的方法
    // 需要从下到上，所以使用后序遍历
    // 1. 确定递归的函数
    // function traverTree(root, p, q) {
    //     // 2. 确定递归终止条件
    //     if(!root || root === p || root === q) return root;
    //     // 3. 确定递归单层逻辑
    //     let left = traverTree(root.left, p, q);
    //     let right = traverTree(root.right, p, q);
    //     if(left && right) return root;
    //     if(!left && right) return right;
    //     return left;
    // }
    // return traverTree(root, p, q);

    // Carl的解法  递归：后序遍历  实现自底向上查找   无独立的递归函数，直接在原函数中操作
    if(!root || root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if(left && right) return root;
    if(!left && right) return right;
    return left;
};