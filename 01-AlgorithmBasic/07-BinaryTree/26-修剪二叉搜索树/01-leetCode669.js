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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
 var trimBST = function(root, low, high) {
    // my solution 思路：递归法
    // function deleteOneNode(target) {
    //     if(!target) return target;
    //     if(!target.right) return target.left;
    //     let cur = target.right;
    //     while(cur.left) {
    //         cur = cur.left;
    //     }
    //     cur.left = target.left;
    //     return target.right;
    // }

    // if(!root) return root;
    // while(root && (root.val < low || root.val > high)) {
    //     root = deleteOneNode(root);
    // }
    // if(!root) return root;
    // root.left = trimBST(root.left, low, high);
    // root.right = trimBST(root.right, low, high);
    // return root;

    // Carl的解法1  递归法  根据二叉搜索树的有序性，如果左子树的根节点小于low，那么整颗左子树都小于low，右子树亦然
    // if(!root) return root;
    // if(root.val < low) return trimBST(root.right, low, high);  // 寻找符合区间[low, high]的节点
    // if(root.val > high) return trimBST(root.left, low, high);  // 寻找符合区间[low, high]的节点
    // root.left = trimBST(root.left, low, high);  // root->left接入符合条件的左孩子
    // root.right = trimBST(root.right, low, high);  // root->right接入符合条件的右孩子
    // return root;

    // Carl的解法2  迭代法
    if(!root) return root;
    // 处理头结点，让root移动到[L, R] 范围内，注意是左闭右闭
    while(root && (root.val < low || root.val > high)) {
        if(root.val < low) root = root.right;
        else root = root.left;
    }
    let cur = root;
    // 此时root已经在[L, R] 范围内，处理左孩子元素小于L的情况
    while(cur) {
        while(cur.left && cur.left.val < low) cur.left = cur.left.right;
        cur = cur.left;
    }
    cur = root;
    // 此时root已经在[L, R] 范围内，处理右孩子大于R的情况
    while(cur) {
        while(cur.right && cur.right.val > high) cur.right = cur.right.left;
        cur = cur.right;
    }
    return root;
};