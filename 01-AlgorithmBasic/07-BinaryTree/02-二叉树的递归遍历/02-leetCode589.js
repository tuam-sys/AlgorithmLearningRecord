/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    // my solution
    function dfs(root, res = []) {
        if(!root) return res;
        res.push(root.val);
        for(let item of root.children) {
            dfs(item, res);
        }
    }
    let res = [];
    dfs(root, res);
    return res;
};