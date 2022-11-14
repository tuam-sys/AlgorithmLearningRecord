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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    // Carl的解法1 递归法：由于中间节点没有处理逻辑，所以前中后序均可
    // 要遍历整个树找到所有路径，所以递归函数不需要返回值, 与112不同
    // function traversal(node, cnt, path) {
    //     // 遇到了叶子节点且找到了和为sum的路径
    //     if(!node.left && !node.right && cnt === 0) {
    //         res.push([...path]);  // ******不能写res.push(path), 要深拷贝
    //         return ;
    //     }
    //     if(!node.left && !node.right) return ;  // 遇到叶子节点而没有找到合适的边，直接返回
    //     // 左 （空节点不遍历）
    //     if(node.left) {
    //         path.push(node.left.val);
    //         traversal(node.left, cnt - node.left.val, path);  // 递归
    //         path.pop();  // 回溯
    //     }
    //     // 右 （空节点不遍历）
    //     if(node.right) {
    //         path.push(node.right.val);
    //         traversal(node.right, cnt - node.right.val, path);  // 递归
    //         path.pop();  // 回溯
    //     }
    // }

    // if(!root) return [];
    // let res = [];
    // traversal(root, targetSum - root.val, [root.val]);  // 把根节点放进路径
    // return res;

    // 递归：代码精简版
    // function traversalTree(node, count) {
    //     curPath.push(node.val);
    //     count -= node.val;
    //     if(!node.left && !node.right && count === 0) {
    //         resPath.push([...curPath]);
    //     }
    //     node.left && traversalTree(node.left, count);
    //     node.right && traversalTree(node.right, count);
    //     let cur = curPath.pop();
    //     count -= cur;
    // }

    // let resPath = [];
    // let curPath = [];
    // if(!root) return resPath;
    // traversalTree(root, targetSum);
    // return resPath;

    // Carl的解法2 迭代法：由于中间节点没有处理逻辑，所以前中后序均可
    if(!root) return [];
    let nodeArr = [root];
    let resArr = [];  // 记录符合目标和的返回路径
    let tempArr = [[]];  // 对应路径
    let countArr = [0];  // 对应和
    while(nodeArr.length) {
        let curNode = nodeArr.shift();
        let curVal = countArr.shift();
        let curNodeArr = tempArr.shift();
        curVal += curNode.val;
        curNodeArr.push(curNode.val);
        // 为叶子结点，且和等于目标数，将此次结果数组push进返回数组中
        if(!curNode.left && !curNode.right && curVal === targetSum) resArr.push(curNodeArr);
        // 左节点，将当前的和及对应路径也对应记录下来
        if(curNode.left) {
            nodeArr.push(curNode.left);
            countArr.push(curVal);
            tempArr.push([...curNodeArr]);
        }
        // 右节点，将当前的和及对应路径也对应记录下来
        if(curNode.right) {
            nodeArr.push(curNode.right);
            countArr.push(curVal);
            tempArr.push([...curNodeArr]);
        }
    }
    return resArr;
};