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
    // 普通二叉树  递归：后序遍历  实现自底向上查找   无独立的递归函数，直接在原函数中操作
    // if(!root || root === p || root === q) return root;
    // let left = lowestCommonAncestor(root.left, p, q);
    // let right = lowestCommonAncestor(root.right, p, q);
    // if(left && right) return root;
    // if(!left && right) return right;
    // return left;

    // 二叉搜索树   没有中节点的处理逻辑，遍历顺序无所谓
    // 使用递归的方法
    // 1. 使用给定的递归函数lowestCommonAncestor
    // 2. 确定递归终止条件
    // if(!root) return root;
    // // 向左子树查询
    // if(root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
    // // 向右子树查询
    // if(root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
    // // if((root.val > p.val && root.val < q.val) || (root.val < p.val && root.val > q.val)) 
    // return root;

    // Carl的解法：迭代法
    while(root) {
        if(root.val > p.val && root.val > q.val) root = root.left;
        else if(root.val < p.val && root.val < q.val) root = root.right;
        else return root;
    }
    return null;
};