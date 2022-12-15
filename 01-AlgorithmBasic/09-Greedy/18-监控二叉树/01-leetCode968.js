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
var minCameraCover = function(root) {
    // Carl的解法1  思路：贪心
    let res = 0;
    // 情况4
    if(traversal(root) === 0) res++;  // root 无覆盖
    return res;

    function traversal(cur) {
        // 空节点，该节点有覆盖
        if(!cur) return 2;
        let left = traversal(cur.left);  // 左
        let right = traversal(cur.right);  // 右
        // 情况1
        // 左右节点都有覆盖
        if(left === 2 && right === 2) return 0;
        // 情况2
        // left == 0 && right == 0 左右节点无覆盖
        // left == 1 && right == 0 左节点有摄像头，右节点无覆盖
        // left == 0 && right == 1 左节点有无覆盖，右节点摄像头
        // left == 0 && right == 2 左节点无覆盖，右节点覆盖
        // left == 2 && right == 0 左节点覆盖，右节点无覆盖
        if(left === 0 || right === 0) {
            res++;
            return 1;
        }
        // 情况3
        // left == 1 && right == 2 左节点有摄像头，右节点有覆盖
        // left == 2 && right == 1 左节点有覆盖，右节点有摄像头
        // left == 1 && right == 1 左右节点都有摄像头
        // 其他情况前段代码均已覆盖
        if(left === 1 || right === 1) return 2;
        // 以上代码我没有使用else，主要是为了把各个分支条件展现出来，这样代码有助于读者理解
        // 这个 return -1 逻辑不会走到这里。
        return -1;
    }

    // Carl的解法2  思路：贪心  精简版
    // let res = 0;
    // if(traversal(root) === 0) res++;  // root 无覆盖
    // return res;

    // function traversal(cur) {
    //     if(!cur) return 2;
    //     let left = traversal(cur.left);  // 左
    //     let right = traversal(cur.right);  // 右
    //     if(left === 2 && right === 2) return 0;
    //     else if(left === 0 || right === 0) {
    //         res++;
    //         return 1;
    //     }
    //     else return 2;
    // }
};