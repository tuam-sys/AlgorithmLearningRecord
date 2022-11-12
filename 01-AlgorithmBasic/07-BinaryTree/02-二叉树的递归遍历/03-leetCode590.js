/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    // my solution
    function dfs(root, res = []) {
        if(!root) return res;
        for(let item of root.children) {
            dfs(item, res);
        }
        res.push(root.val);
    }
    let res = [];
    dfs(root, res);
    return res;
};