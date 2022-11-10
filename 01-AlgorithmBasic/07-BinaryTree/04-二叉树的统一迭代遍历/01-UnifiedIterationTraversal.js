// 前序遍历：中左右
// 压栈顺序：右左中
function preorderTraversal(root, res = []) {
    const stack = [];
    if(root) stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        if(!node) {
            res.push(stack.pop().val);
            continue;
        }
        if(node.right) stack.push(node.right);  // 右
        if(node.left) stack.push(node.left);  // 左
        stack.push(node);  // 中
        stack.push(null);
    }
    return res;
}
//  中序遍历：左中右
//  压栈顺序：右中左
function inorderTraversal(root, res = []) {
    const stack = [];
    if(root) stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        if(!node) {
            res.push(stack.pop().val);
            continue;
        }
        else {
            if(node.right) stack.push(node.right);  // 右
            stack.push(node);  // 中
            stack.push(null);
            if(node.left) stack.push(node.left);  // 左
        }
    }
    return res;
}
// 后续遍历：左右中
// 压栈顺序：中右左
function postorderTraversal(root, res = []) {
    const stack = [];
    if(root) stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        if(!node) {
            res.push(stack.pop().val);
            continue;
        }
        else {
            stack.push(node);  // 中
            stack.push(null);
            if(node.right) stack.push(node.right);  // 右
            if(node.left) stack.push(node.left);  // 左
        }
    }
}