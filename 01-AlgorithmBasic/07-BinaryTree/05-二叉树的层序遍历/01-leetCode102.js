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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    // 二叉树的层序遍历  借助队列
    // let res = [];
    // let queue = [];
    // queue.push(root);
    // if(!root) return res;
    // while(queue.length) {
    //     // 记录当前层级节点数
    //     let length = queue.length;
    //     // 存放每一层的节点
    //     let curLevel = [];
    //     for(let i = 0; i < length; i++) {
    //         let node = queue.shift();
    //         curLevel.push(node.val);
    //         // 存放当前层下一层的节点
    //         node.left && queue.push(node.left);
    //         node.right && queue.push(node.right);
    //     }
    //     // 把每一层的结果放到结果数组
    //     res.push(curLevel);
    // }
    // return res;

    // 二叉树的层序遍历  递归
    function order(cur, res, depth) {
        if(!cur) return;
        if(res.length === depth) res.push([]);
        res[depth].push(cur.val);
        order(cur.left, res, depth + 1);
        order(cur.right, res, depth + 1);
    }
    let res = [];
    let depth = 0;
    order(root, res, depth);
    return res;
};