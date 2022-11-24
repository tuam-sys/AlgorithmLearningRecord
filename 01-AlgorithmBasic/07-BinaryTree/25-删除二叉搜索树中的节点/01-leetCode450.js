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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
    // Carl的解法1：递归法   分五种情况
    // if(!root) return root;   // 第一种情况：没找到删除的节点，遍历到空节点直接返回了
    // if(root.val === key) {
    //     // 第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
    //     if(!root.left && !root.right) {
    //         return null;
    //     }
    //     // 第三种情况：其左孩子为空，右孩子不为空，删除节点，右孩子补位 ，返回右孩子为根节点
    //     else if(!root.left) {
    //         return root.right;
    //     }
    //     // 第四种情况：其右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
    //     else if(!root.right) {
    //         return root.left;
    //     }
    //     // 第五种情况：左右孩子节点都不为空，则将删除节点的左子树放到删除节点的右子树的最左面节点的左孩子的位置
    //     // 并返回删除节点右孩子为新的根节点。
    //     else {
    //         let cur = root.right;  // 找右子树最左面的节点
    //         while(cur.left) {
    //             cur = cur.left;
    //         }
    //         cur.left = root.left;  // 把要删除的节点（root）左子树放在cur的左孩子的位置
    //         return root.right;  // 返回旧root的右孩子作为新root
    //     }
    // }
    // if(root.val > key) root.left = deleteNode(root.left, key);
    // if(root.val < key) root.right = deleteNode(root.right, key);
    // return root; 

    // Carl的解法2：递归法   用交换值的操作来删除目标节点：让目标节点右子树最左面节点的值替换目标节点的值
    // 可以将二叉搜索树想象成有序数组，让目标结点的后一个结点替换目标结点
    // 找到目标结点的后一个结点
    // function getMinNode(root) {
    //     while(root.left) {
    //         root = root.left;
    //     }
    //     return root;
    // }

    // if(!root) return null;
    // if(key > root.val) {
    //     root.right = deleteNode(root.right, key);
    //     return root;
    // }
    // else if(key < root.val) {
    //     root.left = deleteNode(root.left, key);
    //     return root;
    // }
    // else {
    //     // 场景1: 该节点是叶节点
    //     if(!root.left && !root.right) return null;
    //     // 场景2: 有一个孩子节点不存在
    //     if(root.left && !root.right) return root.left
    //     else if(!root.left && root.right) return root.right;
    //     // 场景3: 左右节点都存在
    //     const rightNode = root.right;
    //     // 获取最小值节点
    //     const minNode = getMinNode(rightNode);
    //     // 将待删除节点的值替换为最小值节点值
    //     root.val = minNode.val;
    //     // 删除最小值节点
    //     root.right = deleteNode(root.right, minNode.val);
    //     return root;
    // }

    // Carl的解法3：迭代法  
    // 将目标节点（删除节点）的左子树放到 目标节点的右子树的最左面节点的左孩子位置上
    // 并返回目标节点右孩子为新的根节点
    // 是动画里模拟的过程
    function deleteOneNode(target) {
        if(!target) return target;
        if(!target.right) return target.left;
        let cur = target.right;
        while(cur.left) {
            cur = cur.left;
        }
        cur.left = target.left;
        return target.right;
    }

    if(!root) return root;
    let cur = root;
    let pre = null;  // 记录cur的父节点，用来删除cur
    while(cur) {
        if(cur.val === key) break;
        pre = cur;
        cur.val > key ? cur = cur.left : cur = cur.right;
    }
    if(!pre) return deleteOneNode(cur);  // 如果搜索树只有头结点
    // pre 要知道是删左孩子还是右孩子
    if(pre.left && pre.left.val === key) pre.left = deleteOneNode(pre.left);
    if(pre.right && pre.right.val === key) pre.right = deleteOneNode(pre.right);
    return root;
};