/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    // Carl的解法
    if(!inorder.length) return null;
    let rootVal = postorder.pop();  // 从后序遍历的数组中获取中间节点的值， 即数组最后一个值
    let rootIndex = inorder.indexOf(rootVal);  // 获取中间节点在中序遍历中的下标
    const root = new TreeNode(rootVal);  // 创建中间节点
    // console.log("左中序区间");
    // for(let i = 0; i < rootIndex; i++) {
    //     console.log(inorder[i]);
    // }
    // console.log("右中序区间");
    // for(let i = rootIndex + 1; i < inorder.length; i++) {
    //     console.log(inorder[i]);
    // }
    // console.log("左后序区间");
    // for(let i = 0; i < rootIndex; i++) {
    //     console.log(postorder[i]);
    // }
    // console.log("右后序区间");
    // for(let i = rootIndex; i < postorder.length; i++) {
    //     console.log(postorder[i]);
    // }
    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex));  // 创建左节点
    root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex));  // 创建右节点
    return root;
};

let inorder = [9,3,15,20,7], postorder = [9,15,7,20,3];
buildTree(inorder, postorder);