/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    let queue = [];
    queue.push(root);
    while(queue.length && root) {
        let length = queue.length;
        let cur = queue[0];
        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            if(i > 0) {
                cur.next = node;
                cur = node;
            }
        }
    }
    return root;
};