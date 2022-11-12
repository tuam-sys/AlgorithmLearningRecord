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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    // my solution  递归法：前序遍历
    // function getPath(node, curPath) {
    //     if(!node.left && !node.right) {
    //         res.push(curPath.join('->'));
    //         return ;
    //     }
    //     if(node.left) {
    //         curPath.push(node.left.val);
    //         getPath(node.left, curPath);
    //         curPath.pop();
    //     }
    //     if(node.right) {
    //         curPath.push(node.right.val);
    //         getPath(node.right, curPath);
    //         curPath.pop();
    //     }
    // }
    // let res = [];
    // getPath(root, [root.val]);
    // return res;

    // Carl的解法1  递归法：前序遍历
    //递归遍历+递归三部曲
    //1. 确定递归函数 函数参数
    // function getPath(node, curPath) {
    //     //2. 确定终止条件，到叶子节点就终止
    //     if(!node.left && !node.right) {
    //         curPath += node.val;
    //         res.push(curPath);
    //         return;
    //     }
    //     //3. 确定单层递归逻辑
    //     curPath += node.val + '->';
    //     node.left && getPath(node.left, curPath);
    //     node.right && getPath(node.right, curPath);
    // }

    // let res = [];
    // getPath(root, '');
    // return res;

    // Carl的解法2  迭代法：前序遍历
    if(!root) return [];
    const stack = [root];
    const paths = [''];
    let res = [];
    while(stack.length) {
        const node = stack.pop();
        let path = paths.pop();
        if(!node.left && !node.right) {  // 到叶子节点终止, 添加路径到结果中
            res.push(path += node.val);
            continue;
        }
        path += node.val + '->';
        if(node.right) {  // 右节点存在
            stack.push(node.right);
            paths.push(path);
        }
        if(node.left) {  // 左节点存在
            stack.push(node.left);
            paths.push(path);
        }
    }
    return res;
};