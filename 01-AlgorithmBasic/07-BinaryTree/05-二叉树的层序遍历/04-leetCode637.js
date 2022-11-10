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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    //层级平均值
    let res = [];
    let queue = [];
    queue.push(root);
    while(queue.length) {
        //每一层节点个数
        let length = queue.length;
        //sum记录每一层的和
        let sum = 0;
        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            sum += node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //每一层的平均值存入数组res
        res.push(sum / length);
    }
    return res;
};