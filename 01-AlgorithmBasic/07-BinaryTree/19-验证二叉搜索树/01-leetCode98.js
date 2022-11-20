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
 var isValidBST = function(root) {
    // my solution  思路：添加辅助数组
    // function dfs(root) {
    //     if(!root) return;
    //     dfs(root.left);
    //     treeArr.push(root.val);
    //     dfs(root.right);
    // }

    // let treeArr = [];
    // dfs(root);
    // if(treeArr.length <= 1) return true;
    // else {
    //     for(let i = 0; i < treeArr.length - 1; i++) {
    //         if(treeArr[i] > treeArr[i + 1]) return false;
    //         else continue;
    //     }
    //     return true;
    // }

    // Carl的解法1  递归法：不使用辅助数组
    // if(!root) return true;
    // let left = isValidBST(root.left);
    // if(pre && pre.val >= root.val) return false;
    // else pre = root;
    // let right = isValidBST(root.right);
    // return left && right;

    // Carl的解法1  递归法：不使用辅助数组   定义递归函数
    // let pre = null;
    // function inOrder(root) {
    //     if(!root) return true;
    //     let left = inOrder(root.left);
    //     if(pre && pre.val >= root.val) return false;
    //     pre = root;
    //     let right = inOrder(root.right);
    //     return left && right;
    // }
    // return inOrder(root);

    // Carl的解法2  迭代法：模拟中序遍历
    let stack = [];
    let cur = root;
    let pre = null;  // 记录前一个节点
    while(cur || stack.length) {
        if(cur) {
            stack.push(cur);
            cur = cur.left;  // 左
        }
        else {
            cur = stack.pop();  // 中
            if(pre && pre.val >= cur.val) return false;
            pre = cur;  // 保存前一个访问的结点
            cur = cur.right;  // 右
        }
    }
    return true;
};
let pre = null;   // Carl的解法1  递归法：不使用辅助数组