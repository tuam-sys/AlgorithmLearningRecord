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
 var levelOrderBottom = function(root) {
    // 二叉树的层序遍历  借助队列
    let res = [];
    let queue = [];
    queue.push(root);
    if(!root) return res;
    while(queue.length) {
        // 计算当前层级节点数量
        let length = queue.length;
        // 存放当前层级节点数组
        let curLevel = [];
        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            // 把当前层节点存入curLevel数组
            curLevel.push(node.val);
            // 把下一层级的左右节点存入queue队列
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        // res.push(curLevel);
        // 从数组前头插入值，避免最后反转数组，减少运算时间
        res.unshift(curLevel);
    }
    // return res.reverse();
    return res;
};