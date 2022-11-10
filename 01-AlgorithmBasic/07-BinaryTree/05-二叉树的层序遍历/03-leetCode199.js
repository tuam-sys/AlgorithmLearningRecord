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
 var rightSideView = function(root) {
    //二叉树右视图 只需要把每一层最后一个节点存储到res数组
    let res = [];
    let queue = [];
    queue.push(root);
    if(!root) return res;
    while(queue.length) {
        // 记录当前层级节点个数
        let length = queue.length;
        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            // 将每一层的最后元素放入result数组中
            if(i === length - 1) res.push(node.val);
            node.left && queue.push(node.left);
            node.right || queue.push(node.right);
        }
    }
    return res;
};