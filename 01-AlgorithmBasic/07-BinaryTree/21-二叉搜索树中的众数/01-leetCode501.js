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
 * @return {number[]}
 */
 var findMode = function(root) {
    // my solution 思路：递归 先转换为有序数组   普通二叉树也可以适用
    // let treeArr = [];
    // function dfs(root) {
    //     if(!root) return;
    //     dfs(root.left);
    //     treeArr.push(root.val);
    //     dfs(root.right);
    // }
    // dfs(root);
    // let res = [];
    // let map = new Map();
    // for(let i = 0; i < treeArr.length; i++) {
    //     map.set(treeArr[i], (map.get(treeArr[i]) || 0) + 1);
    // }
    // let cnt = Math.max(...map.values());
    // for(let item of map.entries()) {
    //     if(item[1] === cnt) res.push(item[0]);
    // }
    // return res;

    // my solution 思路：递归 先转换为有序数组   普通二叉树也可以适用   精简版
    // 使用递归中序遍历
    // let map = new Map();
    // // 1. 确定递归函数以及函数参数
    // function traverTree(root) {
    //     // 2. 确定递归终止条件
    //     if(!root) return;
    //     traverTree(root.left);
    //     // 3. 单层递归逻辑
    //     map.set(root.val, map.has(root.val) ? map.get(root.val) + 1 : 1);
    //     traverTree(root.right);
    // }
    // traverTree(root);
    // //上面把数据都存储到map
    // //下面开始寻找map里面的
    // // 定义一个最大出现次数的初始值为root.val的出现次数
    // let maxCount = map.get(root.val);
    // // 定义一个存放结果的数组res
    // let res = [];
    // for(let [key, value] of map) {
    //     // 如果当前值等于最大出现次数就直接在res增加该值
    //     if(value === maxCount) {
    //         res.push(key);
    //     }
    //     // 如果value的值大于原本的maxCount就清空res的所有值，因为找到了更大的
    //     if(value > maxCount) {
    //         res = [];
    //         maxCount = value;
    //         res.push(key);
    //     }
    // }
    // return res;

    // Carl的解法1 思路：递归 在递归的过程中寻找众数
    // let res = [];
    // // 不使用额外空间，使用中序遍历,设置出现最大次数初始值为0
    // let maxCnt = 0;
    // let curCnt = 0;
    // let pre = null;
    // // 1.确定递归函数及函数参数
    // function dfs(root) {
    //     // 2. 确定递归终止条件
    //     if(!root) return;
    //     dfs(root.left);
    //     // 3. 单层递归逻辑
    //     if(!pre) {
    //         curCnt = 1;
    //     }
    //     else if(pre.val === root.val){
    //         curCnt++;
    //     }
    //     else {
    //         curCnt = 1;
    //     }
    //     pre = root;

    //     if(curCnt === maxCnt) res.push(root.val);
    //     if(curCnt > maxCnt) {
    //         maxCnt = curCnt;
    //         res.length = 0;
    //         res.push(root.val);
    //     }
    //     dfs(root.right);
    // }
    // dfs(root);
    // return res;

    // Carl的解法2 思路：迭代  在递归的过程中寻找众数  模拟中序遍历
    let stack = [];
    let res = [];
    let count = 0;  // 统计频率
    let maxCount = 0;  // 最大频率
    let pre = null;
    let cur = root;
    while(cur || stack.length) {
        if(cur) {  // 指针来访问节点，访问到最底层
            stack.push(cur);  // 将访问的节点放进栈
            cur = cur.left;  // 左
        }
        else {
            cur = stack.pop();  // 中
            if(!pre) count = 1;  // 第一个节点
            else if(pre.val === cur.val) count++;  // 与前一个节点数值相同
            else count = 1;  // 与前一个节点数值不同
            if(count === maxCount) res.push(cur.val);  // 如果和最大值频率相同，放进result中
            if(count > maxCount) {  // 如果计数大于最大值频率
                res = [];  // 很关键的一步，不要忘记清空result，之前result里的元素都失效了
                maxCount = count;  // 更新最大频率
                res.push(cur.val);
            }
            pre = cur;
            cur = cur.right;   // 右
        }
    }
    return res;
};