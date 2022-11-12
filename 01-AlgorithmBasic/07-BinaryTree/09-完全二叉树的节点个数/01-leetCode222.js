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
 * @return {number}
 */
 var countNodes = function(root) {
    // 普通二叉树解法
    // 迭代法：前序遍历  时间复杂度：O(n)  空间复杂度：O(n)
    // if(!root) return 0;
    // let res = 0;
    // let stack = [root];
    // while(stack.length) {
    //     let node = stack.pop();
    //     if(node) {
    //         st.right && stack.push(node.right);
    //         node.left && stack.push(node.left);
    //         stack.push(node);
    //         stack.push(null);
    //     }
    //     else {
    //         res++;
    //         stack.pop();
    //     }
    // }
    // return res;

    // 迭代法：层序遍历  时间复杂度：O(n)  空间复杂度：O(n)
    // let queue = [root];
    // let res = 0;
    // while(queue.length && root) {
    //     let length = queue.length;
    //     for(let i = 0; i < length; i++) {
    //         let node = queue.shift();
    //         res++;
    //         node.left && queue.push(node.left);
    //         node.right && queue.push(node.right);
    //     }
    // }
    // return res;

    // 递归法：后序遍历  时间复杂度：O(n)  空间复杂度：O(log n)，算上了递归系统栈占用的空间
    // 1. 确定递归函数参数
    // function getNodeNum(cur) {
        // 2. 确定终止条件
        // if(!cur) return 0;
        // 3. 确定单层递归逻辑
    //     let leftNum = getNodeNum(cur.left);  // 左
    //     let rightNum = getNodeNum(cur.right);  // 右
    //     let treeNum = leftNum + rightNum + 1;  // 中
    //     return treeNum;
    // }
    // 递归法：后序遍历  精简版  空间复杂度：O(log n)，算上了递归系统栈占用的空间
    // if(!root) return 0;
    // return 1 + countNodes(root.left) + countNodes(root.right);

    // 完全二叉树解法  时间复杂度：O(log n × log n)   空间复杂度：O(log n)
    if(!root) return 0;
    let left = root.left;
    let right = root.right;
    let leftDepth = 0;
    let rightDepth = 0;
    while(left) {
        left = left.left;
        leftDepth++;
    }
    while(right) {
        right = right.right;
        rightDepth++;
    }
    if(leftDepth === rightDepth) {
        return Math.pow(2, leftDepth + 1) - 1;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;
};