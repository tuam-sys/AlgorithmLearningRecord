// 前序遍历
function preorderTraversal(root) {
    let res = [];
    function dfs(root) {
        if(root === null) return;
        //先序遍历所以从父节点开始
        res.push(root.val);
        //递归左子树
        dfs(root.left);
        //递归右子树
        dfs(root.right);
    }
    //只使用一个参数 使用闭包进行存储结果
    dfs(root);
    return res;
}
// 中序遍历
function inorderTraversal(root) {
    let res = [];
    function dfs(root) {
        if(root === null) return;
        //递归左子树
        dfs(root.left);
        res.push(root.val);
        //递归右子树
        dfs(root.right);
    }
    //只使用一个参数 使用闭包进行存储结果
    dfs(root);
    return res;
}
// 后序遍历
function postorderTraversal(root) {
    let res = [];
    function dfs(root) {
        if(root === null) return;
        //递归左子树
        dfs(root.left);
        //递归右子树
        dfs(root.right);
        res.push(root.val);
    }
    //只使用一个参数 使用闭包进行存储结果
    dfs(root);
    return res;
}