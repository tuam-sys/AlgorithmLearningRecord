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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    // my solution 层序遍历
    // let queue = [root];
    // while(queue.length && root) {
    //     let length = queue.length;
    //     for(let i = 0; i < length; i++) {
    //         let node = queue.shift();
    //         //节点处理逻辑
    //         node.left && queue.push(node.left);
    //         node.right && queue.push(node.right);
    //         [node.left, node.right] = [node.right, node.left];
    //     }
    // }
    // return root;

    // Carl的解法1  使用递归版本的前序遍历
    // 终止条件
    // if(!root) return root;
    // [root.left, root.right] = [root.right, root.left];
    // invertTree(root.left);
    // invertTree(root.right);
    // return root;

    // Carl的解法2  使用迭代版本(统一模板))的前序遍历
    //使用迭代方法的前序遍历 
    let stack = [];
    if(!root) return root;
    stack.push(root);
    while(stack.length) {
        let node = stack.pop();
        if(node) {
            //前序遍历顺序中左右  入栈顺序是前序遍历的倒序右左中
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
            stack.push(node);
            stack.push(null);
        }
        else {
            node = stack.pop();
            //节点处理逻辑
            [node.left, node.right] = [node.right, node.left];
        }
    }
    return root;
};