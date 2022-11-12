/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    // N叉树的最大深度 层序遍历
    // let depth = 0;
    // let queue = [root];
    // while(queue.length && root) {
    //     let length = queue.length;
    //     depth++;
    //     for(let i = 0; i < length; i++) {
    //         let node = queue.shift();
    //         for(let item of node.children) item && queue.push(item);
    //     }
    // }
    // return depth;

    // N叉树的最大深度 递归写法
    if(!root) return 0;
    let depth = 0;
    for(let node of root.children) {
        depth = Math.max(depth, maxDepth(node));
    }
    return depth + 1;
};