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
 var convertBST = function(root) {
    // my solution  思路：递归   递归函数有返回值，返回当前结点的累加值
    // function sumTree(root, sum) {    
    //     if(!root.left && !root.right) {
    //         root.val = root.val + sum;
    //         return root.val;
    //     }
    //     if(root.right) sum = sumTree(root.right, sum);
    //     root.val = root.val + sum;
    //     sum = root.val;
    //     if(root.left) sum = sumTree(root.left, sum);
    //     return sum;
    // }
    // if(!root) return root;
    // sumTree(root, 0);
    // return root;

    // Carl的解法1  递归  递归函数无返回值
    // function ReverseInOrder(cur) {
    //     if(cur) {
    //         ReverseInOrder(cur.right);
    //         cur.val += pre;
    //         pre = cur.val;
    //         ReverseInOrder(cur.left);
    //     }
    // }
    // let pre = 0;
    // ReverseInOrder(root);
    // return root;

    // Carl的解法2  迭代  反中序遍历
    let stack = [];
    let pre = 0;
    let cur = root;
    while(cur || stack.length) {
        // if(cur) {
        //     stack.push(cur);
        //     cur = cur.right;
        // }
        // else {
        //     cur = stack.pop();
        //     cur.val += pre;
        //     pre = cur.val;
        //     cur = cur.left;
        // }
        // 以上循环体的另一种写法
        while(cur) {
            stack.push(cur);
            cur = cur.right;
        }
        cur = stack.pop();
        cur.val += pre;
        pre = cur.val;
        cur = cur.left;
    }
    return root;
};