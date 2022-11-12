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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    // my solution
    function compareNode(root, subRoot) {
        if(!root && !subRoot) return true;
        else if(!root || !subRoot || root.val !== subRoot.val) return false;
        let left = compareNode(root.left, subRoot.left);
        let right = compareNode(root.right, subRoot.right);
        return left && right;
    }
    let queue = [root];
    while(queue.length) {
        let length = queue.length;
        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            if(compareNode(node, subRoot)) return true;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return false;
};