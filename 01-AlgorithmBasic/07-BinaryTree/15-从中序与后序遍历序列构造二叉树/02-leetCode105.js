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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    // Carl的解法
    if(!inorder.length) return null;
    let rootVal = preorder.shift();  // 从前序遍历的数组中获取中间节点的值， 即数组第一个值
    let rootIndex = inorder.indexOf(rootVal);  // 获取中间节点在中序遍历中的下标
    const root = new TreeNode(rootVal);  // 创建中间节点
    // console.log("左前序区间");
    // for(let i = 0; i < rootIndex; i++) {
    //     console.log(preorder[i]);
    // }
    // console.log("右前序区间");
    // for(let i = rootIndex; i < preorder.length; i++) {
    //     console.log(preorder[i]);
    // }
    // console.log("左中序区间");
    // for(let i = 0; i < rootIndex; i++) {
    //     console.log(inorder[i]);
    // }
    // console.log("右中序区间");
    // for(let i = rootIndex + 1; i < inorder.length; i++) {
    //     console.log(inorder[i]);
    // }
    root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex));  // 创建左节点
    root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1));  // 创建右节点
    return root;
};

let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];
buildTree(preorder, inorder);