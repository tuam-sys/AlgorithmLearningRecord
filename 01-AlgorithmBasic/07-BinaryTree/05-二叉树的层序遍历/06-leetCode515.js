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
 var largestValues = function(root) {
    //使用层序遍历
    let res = [];
    let queue = [];
    queue.push(root);
    while(queue.length && root) {
        let length = queue.length;
        //设置max初始值就是队列的第一个元素
        let max = queue[0].val;
        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            max = max >= node.val ? max : node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的最大值放到res数组
        res.push(max);
    }
    return res;
};