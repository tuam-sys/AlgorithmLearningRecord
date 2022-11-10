// 使用两个数组的栈方法（push, pop） 实现队列
/**
* Initialize your data structure here.
*/
var MyQueue = function() {
    this.stackIn = [];
    this.stackOut = [];
};

/** 
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackIn.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const size = this.stackOut.length;
    if(size) {
        return this.stackOut.pop();
    }
    else {
        while(this.stackIn.length) {
            this.stackOut.push(this.stackIn.pop());
        }
    }
    return this.stackOut.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const x = this.pop();
    this.stackOut.push(x);
    return x;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stackIn.length && !this.stackOut.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
 var myQueue = new MyQueue();
 myQueue.push(1); // queue is: [1]
//  myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
//  myQueue.push(3);
 let a1 = myQueue.peek(); // return 1
 let a2 = myQueue.pop(); // return 1, queue is [2]
 let a3 = myQueue.empty(); // return false
 console.log(a1, a2, a3);