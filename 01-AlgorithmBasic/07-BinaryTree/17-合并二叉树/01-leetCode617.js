/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    // my solution 递归法：不修改root1和root2的结构，重新定一个树
    // if(!root1 && !root2) return null;
    // const root = new TreeNode(0);
    // if(root1 && root2) {
    //     root.val = root1.val + root2.val;
    //     root.left = mergeTrees(root1.left, root2.left);
    //     root.right = mergeTrees(root1.right, root2.right);
    // }
    // if(root1 && !root2) {
    //     root.val = root1.val;
    //     root.left = mergeTrees(root1.left, null);
    //     root.right = mergeTrees(root1.right, null);
    // }
    // if(!root1 && root2) {
    //     root.val = root2.val;
    //     root.left = mergeTrees(null, root2.left);
    //     root.right = mergeTrees(null, root2.right);
    // }
    // return root;

    // Carl的解法1 递归法：修改root1的结构，返回root1  前序遍历   本题：前中后序均可
    // if(!root1) return root2;
    // if(!root2) return root1;
    // root1.val += root2.val;
    // root1.left = mergeTrees(root1.left, root2.left);
    // root1.right = mergeTrees(root1.right, root2.right);
    // return root1;

    // Carl的解法1 迭代法：修改root1的结构，返回root1  模拟层序遍历
    if(!root1) return root2;
    if(!root2) return root1;
    let queue = [root1, root2];
    while(queue.length) {
        let node1 = queue.shift();
        let node2 = queue.shift();
        node1.val += node2.val;
        if(node1.left && node2.left) {
            queue.push(node1.left);
            queue.push(node2.left);
        }
        if(node1.right && node2.right) {
            queue.push(node1.right);
            queue.push(node2.right);
        }
        if(!node1.left && node2.left) {
            node1.left = node2.left;
        }
        if(!node1.right && node2.right) {
            node1.right = node2.right;
        }
    }
    return root1;
};