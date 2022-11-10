// 使用两个队列实现
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // 减少两个队列交换的次数， 只有当queue1为空时，交换两个队列
    if(!this.queue1.length) {
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
    while(this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    // 两种写法均可，但是根据题意只能使用shift
    return this.queue1.shift();
    // return this.queue1.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    const x = this.pop();
    this.queue1.push(x);
    return x;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue1.length && !this.queue2.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// console.log(arr);  // [1, 2, 3, 4]
// console.log(arr.pop());  // 4
// arr.unshift(5);
// arr.unshift(6);
// console.log(arr);  // [6, 5, 1, 2, 3]
// console.log(arr.pop());  // 3
// console.log(arr.shift());  // 6

var obj = new MyStack()
obj.push(1)
obj.push(2)
obj.push(3)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()
console.log(param_2, param_3, param_4);