/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    // my solution  超时
    // if(nums.length === 1) return nums;
    // let res = [];
    // let stack = [];
    // let max = nums[0];
    // for(let i = 0; i < nums.length; i++) {
    //     if(i < k) {
    //         stack.push(nums[i]);
    //         max = max >= nums[i] ? max : nums[i];
    //         if(i === k - 1) {
    //             res.push(max);
    //         }
    //     }
    //     else {
    //         let out = stack.shift();
    //         let come = nums[i];
    //         stack.push(come);
    //         if(out !== max) {
    //             max = max >= come ? max : come;
    //             res.push(max);
    //         }
    //         else {
    //             max = stack[0];
    //             for(let j = 1; j < stack.length; j++) {
    //                 max = max >= stack[j] ? max : stack[j];
    //             }
    //             res.push(max);
    //         }
    //     }
    // }
    // return res;

    // Carl的解法 思路：采用单调队列  时间复杂度：O(n)  空间复杂度：O(K)
    class MonoQueue {
        queue;
        constructor() {
            this.queue = [];
        }
        enqueue(value) {
            let back = this.queue[this.queue.length - 1];
            while(back !== undefined && value > back) {
                this.queue.pop();
                back = this.queue[this.queue.length - 1];
            }
            this.queue.push(value);
        }
        dequeue(value) {
            let front = this.front();
            if(front === value) {
                this.queue.shift();
            }
        }
        front() {
            return this.queue[0];
        }
    }
    let helperQueue = new MonoQueue();
    let i = 0;
    let j = 0;
    let resArr = [];
    while(j < k) {
        helperQueue.enqueue(nums[j++]);
    }
    resArr.push(helperQueue.front());
    while(j < nums.length) {
        // 先进队或者先离队均可
        helperQueue.enqueue(nums[j]);
        helperQueue.dequeue(nums[i]);
        resArr.push(helperQueue.front());
        i++;
        j++;
    }
    return resArr;
};
let nums = [1,3,-1,-3,5,3,6,7], k = 3;
// let nums = [1], k = 1;
console.log(maxSlidingWindow(nums, k));