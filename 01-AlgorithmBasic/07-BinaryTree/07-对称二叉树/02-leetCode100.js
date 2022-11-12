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
    // my solution  递归法
    // function compareNode(p, q) {
    //     if(!p && !q) return true;
    //     else if(!p || !q || p.val !== q.val) return false;
    //     let left = compareNode(p.left, q.left);
    //     let right = compareNode(p.right, q.right);
    //     return left && right;
    // }
    // return compareNode(p, q);

    // Carl的解法  迭代法
    if(!p && !q) return true;
    if(!p || !q) return false;
    let queue = [p, q];
    while(queue.length) {
        let leftNode = queue.shift();
        let rightNode = queue.shift();
        if(!leftNode && !rightNode) continue;
        if(!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;
        // 相对于求对称二叉树，这里两个树都要保持一样的遍历顺序
        queue.push(leftNode.left);
        queue.push(rightNode.left);
        queue.push(leftNode.right);
        queue.push(rightNode.right);
    }
    return true;
};