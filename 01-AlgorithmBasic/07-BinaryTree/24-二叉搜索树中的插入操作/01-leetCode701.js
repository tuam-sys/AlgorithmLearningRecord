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
 var insertIntoBST = function(root, val) {
    // my solution  递归：前序遍历   有返回值的递归写法
    // if(!root) {
    //     let node = new TreeNode(val);
    //     return node;
    // }
    // if(root.val > val) root.left = insertIntoBST(root.left, val);
    // if(root.val < val) root.right = insertIntoBST(root.right, val);
    // return root;

    // Carl的解法1  无返回值的递归
    // let parent = new TreeNode(0);
    // function preOrder(cur, val) {
    //     if(!cur) {
    //         let node = new TreeNode(val);
    //         if(parent.val > val) parent.left = node;
    //         else parent.right = node;
    //         return;
    //     }
    //     parent = cur;
    //     if(cur.val > val) preOrder(cur.left, val);
    //     if(cur.val < val) preOrder(cur.right, val);
    // }
    // if(!root) root = new TreeNode(val);
    // preOrder(root, val);
    // return root;

    // Carl的解法2  迭代
    if(!root) {
        root = new TreeNode(val);
    }
    else {
        let parent = new TreeNode(0);
        let cur = root;
        while(cur) {
            parent = cur;
            if(cur.val > val) cur = cur.left;
            else cur = cur.right;
        }
        let node = new TreeNode(val);
        if(parent.val > val) parent.left = node;
        else parent.right = node;
    }
    return root;
};