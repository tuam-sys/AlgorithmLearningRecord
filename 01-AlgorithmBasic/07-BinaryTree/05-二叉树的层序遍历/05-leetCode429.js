/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    //每一层可能有2个以上,所以不再使用node.left node.right
    let res = [];
    let queue = [];
    queue.push(root);
    if(!root) return res;
    while(queue.length) {
        //记录每一层节点个数还是和二叉树一致
        let length = queue.length;
        //存放每层节点 也和二叉树一致
        let curLevel = [];
        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            //这里不再是 ndoe.left node.right 而是循坏node.children
            // 遍历方法1
            // while(node.children.length) {
            //     let t = node.children.shift();
            //     if(t) queue.push(t);
            // }
            // 遍历方法2
            for(let item of node.children) {
                item && queue.push(item);
            }
        }
        res.push(curLevel);
    }
    return res;
};